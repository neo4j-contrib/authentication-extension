package org.neo4j.server;

import org.mortbay.jetty.HttpConnection;
import org.mortbay.jetty.Request;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author tbaum
 * @since 15.04.11 02:04
 */
public class HostedAdminContext extends SimpleSecurityContext {

    private final MultipleAuthenticationService users;

    public static Context install(final Server jetty, final AuthenticationService authenticationService, MultipleAuthenticationService users) {
        return new HostedAdminContext(jetty, authenticationService, users);
    }

    private HostedAdminContext(Server jetty, AuthenticationService authenticationService, MultipleAuthenticationService users) {
        super(jetty, authenticationService);
        this.users = users;
    }

    @Override
    public void handle(String target, HttpServletRequest request, HttpServletResponse response, int dispatch) throws IOException {
        Request base_request = (request instanceof Request) ? (Request) request : HttpConnection.getCurrentConnection().getRequest();

        if (target.startsWith("/admin/add-user-ro") && handleAuth(request, response)) {
            final String user = request.getParameter("user");
            users.setPermissionForUser(user, true, false);
            sendOk(base_request, response);
        } else if (target.startsWith("/admin/add-user-rw") && handleAuth(request, response)) {
            final String user = request.getParameter("user");
            users.setPermissionForUser(user, true, true);
            sendOk(base_request, response);
        } else if (target.startsWith("/admin/remove-user") && handleAuth(request, response)) {
            final String user = request.getParameter("user");
            users.setPermissionForUser(user, false, false);
            sendOk(base_request, response);
        }
    }

    private void sendOk(Request base_request, HttpServletResponse response) throws IOException {
        response.getWriter().println("OK");
        base_request.setHandled(true);
    }
}