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
