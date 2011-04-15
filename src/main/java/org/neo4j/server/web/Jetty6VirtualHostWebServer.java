/**
 * Copyright (c) 2002-2011 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package org.neo4j.server.web;

import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.handler.ContextHandler;
import org.mortbay.jetty.handler.MovedContextHandler;
import org.neo4j.server.Util;

import java.util.Arrays;

public class Jetty6VirtualHostWebServer extends Jetty6WebServer implements WebServer {

    private final Server jetty;
    private final String[] vhost;

    public Jetty6VirtualHostWebServer(final Server jetty, final String... vhost) {
        this.jetty = jetty;
        this.vhost = vhost;

        //TODO refactor Jetty6WebServer
        final Server mock = new Server() {
            public void addHandler(Handler handler) {
                jetty.addHandler(handler);
                ((ContextHandler) handler).setVirtualHosts(vhost);
            }
        };
        Util.setPrivateField(this, Jetty6WebServer.class, "jetty", mock);

    }

    @Override
    public void start() {
        MovedContextHandler redirector = new MovedContextHandler();
        redirector.setVirtualHosts(vhost);
        jetty.addHandler(redirector);

        //TODO refactor Jetty6WebServer
        Util.invokePrivate(this, Jetty6WebServer.class, "loadStaticContent");
        Util.invokePrivate(this, Jetty6WebServer.class, "loadJAXRSPackages");
    }

    @Override
    public void stop() {
        for (Handler handler : jetty.getHandlers()) {
            if (handler instanceof ContextHandler) {
                ContextHandler contextHandler = (ContextHandler) handler;
                if (Arrays.equals(contextHandler.getVirtualHosts(), vhost)) {
                    try {
                        handler.stop();
                    } catch (Exception ignored) {
                    }
                    jetty.removeHandler(handler);
                }
            }
        }
    }
}
