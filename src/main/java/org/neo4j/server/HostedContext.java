package org.neo4j.server;

import org.apache.commons.configuration.PropertiesConfiguration;
import org.mortbay.jetty.HttpConnection;
import org.mortbay.jetty.Request;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;
import sun.misc.BASE64Decoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author tbaum
 * @since 15.04.11 02:04
 */
class HostedContext extends Context {

    private final PropertiesConfiguration hosts;
    private final HostedBootstrapper bootstrapper;

    public HostedContext(HostedBootstrapper bootstrapper, Server jetty, PropertiesConfiguration hosts) {
        super(jetty, "/");
        this.bootstrapper = bootstrapper;
        this.hosts = hosts;
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
        } else {
            final String credentials = hosts.getString(request.getServerName());
            if (credentials == null) {
                send404(base_request, response);

            } else {
                final String header = request.getHeader("Authorization");
                if (!checkAuth(header, credentials)) {
                    sendAuth(base_request, response);
                }
            }
        }
    }

    private void sendOk(Request base_request, HttpServletResponse response) throws IOException {
        response.getWriter().println("OK");
        base_request.setHandled(true);
    }

    private void send404(Request base_request, HttpServletResponse response) throws IOException {
        response.sendError(HttpServletResponse.SC_NOT_FOUND);
        base_request.setHandled(true);
    }

    private void sendAuth(Request base_request, HttpServletResponse response) throws IOException {
        response.setHeader("WWW-Authenticate", "Basic realm=\"neo4j\"");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
        base_request.setHandled(true);
    }

    private boolean checkAuth(String header, String cred) throws IOException {
        if (header == null) {
            return false;
        }
        final String encoded = header.substring(header.indexOf(" ") + 1);
        final String decoded = new String(new BASE64Decoder().decodeBuffer(encoded));

        return decoded.equals(cred);
    }
}