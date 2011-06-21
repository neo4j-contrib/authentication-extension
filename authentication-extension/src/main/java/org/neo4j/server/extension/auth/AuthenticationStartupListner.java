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
package org.neo4j.server.extension.auth;

import org.mortbay.component.LifeCycle;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;
import org.mortbay.jetty.servlet.FilterHolder;
import org.neo4j.server.logging.Logger;

/**
 * @author tbaum
 * @since 21.06.11 16:52
 */
class AuthenticationStartupListner implements LifeCycle.Listener {
// ------------------------------ FIELDS ------------------------------

    private static final Logger LOG = new Logger(AuthenticationStartupListner.class);

    private final Server jetty;
    private final AuthenticationFilter securityFilter;
    private final AuthenticationFilter adminFilter;
    private final String adminContextName;

    public AuthenticationStartupListner(final Server jetty, final AuthenticationFilter securityFilter,
                                        final String adminContextName, final AuthenticationFilter adminFilter) {
        this.jetty = jetty;
        this.securityFilter = securityFilter;
        this.adminFilter = adminFilter;
        this.adminContextName = adminContextName;
    }

    @Override public void lifeCycleStarting(final LifeCycle event) {
    }

    @Override public void lifeCycleStarted(final LifeCycle event) {
        addSecurityFilter();
    }

    @Override public void lifeCycleFailure(final LifeCycle event, final Throwable cause) {
    }

    @Override public void lifeCycleStopping(final LifeCycle event) {
    }

    @Override public void lifeCycleStopped(final LifeCycle event) {
    }

    private void addSecurityFilter() {
        for (Handler handler : jetty.getHandlers()) {
            if (handler instanceof Context) {
                final Context context = (Context) handler;
                final String path = context.getContextPath();

                if (path.equals(adminContextName)) {
                    LOG.info("adding admin-security-filter to " + path);
                    context.addFilter(new FilterHolder(adminFilter), "/*", Handler.ALL);
                    continue;
                }

                LOG.info("adding security-filter to " + path);
                context.addFilter(new FilterHolder(securityFilter), "/*", Handler.ALL);
            }
        }
    }
}
