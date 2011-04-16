package org.neo4j.server;

import org.mortbay.jetty.HttpConnection;
import org.mortbay.jetty.Request;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author tbaum
 * @since 15.04.11 02:04
 */
public class HostedAdminContext extends Context {

    private final HostedBootstrapper bootstrapper;

    public static Context install(final HostedBootstrapper bootstrapper) {
        return new HostedAdminContext(bootstrapper.getJetty(), bootstrapper);
    }

    private HostedAdminContext(Server jetty, HostedBootstrapper bootstrapper) {
        super(jetty, "/");
        this.bootstrapper = bootstrapper;
    }

    @Override
    public void handle(String target, HttpServletRequest request, HttpServletResponse response, int dispatch) throws IOException, ServletException {
        Request base_request = (request instanceof Request) ? (Request) request : HttpConnection.getCurrentConnection().getRequest();

        if (target.startsWith("/admx/add")) {
            final String db = request.getParameter("db");
            final String cred = request.getParameter("cred");
            bootstrapper.createVirtualServer(db, cred);
            sendOk(base_request, response);
        } else if (target.startsWith("/admx/remove")) {
            final String db = request.getParameter("db");
            bootstrapper.removeVirtualServer(db);
            sendOk(base_request, response);
        }
    }

    private void sendOk(Request base_request, HttpServletResponse response) throws IOException {
        response.getWriter().println("OK");
        base_request.setHandled(true);
    }
}