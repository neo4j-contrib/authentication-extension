package org.neo4j.server;

import org.mortbay.jetty.HttpConnection;
import org.mortbay.jetty.Request;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;
import sun.misc.BASE64Decoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static javax.servlet.http.HttpServletResponse.SC_UNAUTHORIZED;

/**
 * @author tbaum
 * @since 16.04.11 15:04
 */
public class SimpleSecurityContext extends Context {

    private final AuthenticationService authenticationService;

    public static Context install(final HostedBootstrapper bootstrapper) {
        return new SimpleSecurityContext(bootstrapper.getJetty(), bootstrapper.getAuthenticationService());
    }

    private SimpleSecurityContext(Server jetty, AuthenticationService authenticationService) {
        super(jetty, "/");
        this.authenticationService = authenticationService;
    }

    @Override
    public void handle(String target, HttpServletRequest request, HttpServletResponse response, int dispatch) throws IOException {
        final Request base_request = (request instanceof Request) ? (Request) request : HttpConnection.getCurrentConnection().getRequest();

        final String authHeader = request.getHeader("Authorization");
        if (authHeader == null) {
            sendAuth(base_request, response);
        } else {
            final String encoded = authHeader.substring(authHeader.indexOf(" ") + 1);
            final byte[] decoded = new BASE64Decoder().decodeBuffer(encoded);

            if (!authenticationService.isValid(decoded)) {
                sendAuth(base_request, response);
            }
        }
    }

    private void sendAuth(Request request, HttpServletResponse response) throws IOException {
        response.setHeader("WWW-Authenticate", "Basic realm=\"neo4j\"");
        response.sendError(SC_UNAUTHORIZED);
        request.setHandled(true);
    }
}