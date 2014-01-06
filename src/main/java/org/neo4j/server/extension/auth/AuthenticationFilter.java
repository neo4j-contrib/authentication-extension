/**
 * Copyright (c) 2002-2014 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.neo4j.server.extension.auth;

import sun.misc.BASE64Decoder;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author tbaum
 * @since 23.01.11
 */
public class AuthenticationFilter implements Filter {
    private final AuthenticationService[] authenticationService;
    private final String realmName;

    public AuthenticationFilter(final String realmName, final AuthenticationService... authenticationService) {
        this.authenticationService = authenticationService;
        this.realmName = realmName;
    }

    @Override public void init(final FilterConfig filterConfig) throws ServletException {
    }

    public void doFilter(final ServletRequest req, final ServletResponse res, final FilterChain chain)
            throws ServletException, IOException {
        if (!(req instanceof HttpServletRequest) || !(res instanceof HttpServletResponse)) {
            throw new ServletException("request not allowed");
        }

        final HttpServletRequest request = (HttpServletRequest) req;
        final HttpServletResponse response = (HttpServletResponse) res;

        final String header = request.getHeader("Authorization");

        if (checkAuth(((HttpServletRequest) req).getMethod(), header)) {
            chain.doFilter(request, response);
        } else {
            sendAuthHeader(response);
        }
    }

    public void destroy() {
    }

    private boolean checkAuth(String method, String header) throws IOException {
        if (header == null) {
            return false;
        }

        final String encoded = header.substring(header.indexOf(" ") + 1);
        byte[] credentials = new BASE64Decoder().decodeBuffer(encoded);
        for (AuthenticationService service : authenticationService) {
            if (service.hasAccess(method, credentials)) {
                return true;
            }
        }
        return false;
    }

    private void sendAuthHeader(HttpServletResponse response) throws IOException {
        response.setHeader("WWW-Authenticate", "Basic realm=\"" + realmName + "\"");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
