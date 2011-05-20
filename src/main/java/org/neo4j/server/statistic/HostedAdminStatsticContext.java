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
package org.neo4j.server.statistic;

import org.codehaus.jackson.map.ObjectMapper;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;
import org.mortbay.jetty.servlet.FilterHolder;
import org.mortbay.jetty.servlet.ServletHolder;
import org.neo4j.server.security.AuthenticationService;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.web.SecurityFilter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

/**
 * @author tbaum
 * @since 15.04.11 02:04
 */
public class HostedAdminStatsticContext extends Context {

    private static final Logger log = Logger.getLogger(HostedAdminStatsticContext.class);

    private final StatisticFilter statisticFilter = new StatisticFilter();
    private List<Map<String, Object>> statistics = new ArrayList<Map<String, Object>>();

    public HostedAdminStatsticContext(Server jetty, String contextPath) {
        this(jetty, contextPath, null);
    }

    public HostedAdminStatsticContext(Server jetty, String contextPath, AuthenticationService authenticationService) {
        super(jetty, contextPath, false, false);

        if (authenticationService != null) {
            addFilter(new FilterHolder(new SecurityFilter(authenticationService, "neo4j-admin")), "/*", ALL);
        }
        addServlet(new ServletHolder(new FetchStatisticDataServlet()), "/");

        new Timer("statistic-collector", true).schedule(new StatisticCollectorTask(), 0, 60000);
    }

    public void addTimingFilter() {
        for (Handler handler : getServer().getHandlers()) {
            if (handler instanceof Context) {
                ((Context) handler).addFilter(new FilterHolder(statisticFilter), "/*", Handler.ALL);
            }
        }
    }

    private class FetchStatisticDataServlet extends HttpServlet {
        @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
            List<Map<String, Object>> result = statistics;
            synchronized (HostedAdminStatsticContext.this) {
                statistics = new ArrayList<Map<String, Object>>();
            }

            new ObjectMapper().writer().writeValue(resp.getWriter(), result);
        }
    }

    private class StatisticCollectorTask extends TimerTask {
        @Override public void run() {
            Map<String, Object> e = statisticFilter.aggregate();
            log.info(e.toString());
            synchronized (HostedAdminStatsticContext.this) {
                if (statistics.size() > 2047) {
                    while (statistics.size() > 1023) {
                        log.warn("dropping statistic record " + statistics.remove(0));
                    }
                }
                statistics.add(e);
            }
        }
    }
}