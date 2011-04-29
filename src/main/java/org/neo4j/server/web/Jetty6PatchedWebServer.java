package org.neo4j.server.web;

import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.SessionManager;
import org.mortbay.jetty.handler.MovedContextHandler;
import org.neo4j.server.Util;

public class Jetty6PatchedWebServer extends Jetty6WebServer implements WebServer {

    private final Server jetty;
    private final SessionManager sm;

    public Jetty6PatchedWebServer(SessionManager sm, final Server jetty) {
        this.jetty = jetty;

        //TODO refactor Jetty6WebServer
        final Server mock = new Server() {
            @Override
            public void addHandler(Handler handler) {
                jetty.addHandler(handler);
                // ((ContextHandler) handler).setVirtualHosts(vhost);
            }
        };
        Util.setPrivateField(this, Jetty6WebServer.class, "jetty", mock);
        this.sm = sm;
    }

    @Override
    public void start() {
        MovedContextHandler redirector = new MovedContextHandler();
        // redirector.setVirtualHosts(vhost);
        jetty.addHandler(redirector);

        loadStaticContent(sm);
        loadJAXRSPackages(sm);
    }

    @Override
    public void stop() {
        super.stop();
    }
}
