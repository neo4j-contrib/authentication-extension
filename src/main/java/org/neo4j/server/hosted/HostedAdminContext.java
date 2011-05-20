/**
 * Copyright (c) 2002-2011 "Neo Technology,"
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
package org.neo4j.server.hosted;

import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;
import org.mortbay.jetty.servlet.FilterHolder;
import org.mortbay.jetty.servlet.ServletHolder;
import org.neo4j.server.security.AuthenticationService;
import org.neo4j.server.security.MultipleAuthenticationService;
import org.neo4j.server.statistic.HostedAdminStatsticContext;
import org.neo4j.server.web.SecurityFilter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.neo4j.server.security.MultipleAuthenticationService.Permission.*;

/**
 * @author tbaum
 * @since 15.04.11 02:04
 */
public class HostedAdminContext extends Context {

    private final MultipleAuthenticationService users;
    private final SecurityFilter securityFilter;

    public HostedAdminContext(Server jetty, AuthenticationService adminAuth, MultipleAuthenticationService users) {
        super(jetty, "/admin", false, false);
        this.users = users;
        this.securityFilter = new SecurityFilter(this.users, "neo4j graphdb");

        addFilter(new FilterHolder(new SecurityFilter(adminAuth, "neo4j-admin")), "/*", ALL);
        addServlet(new ServletHolder(new AddUserRoServlet()), "/add-user-ro");
        addServlet(new ServletHolder(new AddUserRwServlet()), "/add-user-rw");
        addServlet(new ServletHolder(new RemoveUserServlet()), "/remove-user");
    }

    public void addSecurityFilter() {
        for (Handler handler : getServer().getHandlers()) {
            if (handler instanceof Context &&
                    !(handler instanceof HostedAdminContext) && !(handler instanceof HostedAdminStatsticContext)) {
                ((Context) handler).addFilter(new FilterHolder(securityFilter), "/*", Handler.ALL);
            }
        }
    }

    private class RemoveUserServlet extends HttpServlet {
        @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
            final String user = req.getParameter("user");
            if (user == null) throw new IllegalArgumentException("missing parameter 'user'");
            users.setPermissionForUser(user, NONE);
            resp.getWriter().println("OK");
        }
    }

    private class AddUserRwServlet extends HttpServlet {
        @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
            final String user = req.getParameter("user");
            if (user == null) throw new IllegalArgumentException("missing parameter 'user'");
            users.setPermissionForUser(user, RW);
            resp.getWriter().println("OK");
        }
    }

    private class AddUserRoServlet extends HttpServlet {
        @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
            final String user = req.getParameter("user");
            if (user == null) throw new IllegalArgumentException("missing parameter 'user'");
            users.setPermissionForUser(user, RO);
            resp.getWriter().println("OK");
        }
    }
}