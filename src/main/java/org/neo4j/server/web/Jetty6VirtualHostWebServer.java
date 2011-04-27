package org.neo4j.server.web;

import java.util.Arrays;

import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.SessionManager;
import org.mortbay.jetty.handler.ContextHandler;
import org.mortbay.jetty.handler.MovedContextHandler;
import org.neo4j.server.Util;

public class Jetty6VirtualHostWebServer extends Jetty6WebServer implements WebServer {

    private final Server jetty;
    private final String[] vhost;
    private final SessionManager sm;

    public Jetty6VirtualHostWebServer( SessionManager sm, final Server jetty, final String... vhost )
    {
        this.jetty = jetty;
        this.vhost = vhost;

        //TODO refactor Jetty6WebServer
        final Server mock = new Server() {
            @Override
            public void addHandler(Handler handler) {
                jetty.addHandler(handler);
                ((ContextHandler) handler).setVirtualHosts(vhost);
            }
        };
        Util.setPrivateField(this, Jetty6WebServer.class, "jetty", mock);
        this.sm = sm;
    }

    @Override
    public void start() {
        MovedContextHandler redirector = new MovedContextHandler();
        redirector.setVirtualHosts(vhost);
        jetty.addHandler(redirector);

        loadStaticContent( sm );
        loadJAXRSPackages( sm );
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
