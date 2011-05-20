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

import org.mortbay.jetty.Response;

import javax.servlet.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static java.lang.System.currentTimeMillis;
import static java.lang.System.nanoTime;

/**
 * @author tbaum
 * @since 19.05.11 16:47
 */
public class StatisticFilter implements Filter {

    private volatile long count = 0;
    private volatile long start = System.currentTimeMillis();
    private volatile StatisticRecord size = new StatisticRecord();
    private volatile StatisticRecord duration = new StatisticRecord();

    @Override public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        final Long start = nanoTime();
        try {
            chain.doFilter(request, response);
        } finally {
            long d = nanoTime() - start;

            synchronized (this) {
                count++;
                duration.addValue(d / 1000000);
                size.addValue(((Response) response).getContentCount());
            }

        }
    }

    @Override public void destroy() {
    }

    public Map<String, Object> aggregate() {
        final StatisticRecord duration, size;
        final long start, end, count;

        synchronized (this) {
            count = this.count;
            duration = this.duration;
            size = this.size;
            start = this.start;

            end = this.start = currentTimeMillis();
            this.count = 0;
            this.duration = new StatisticRecord();
            this.size = new StatisticRecord();
        }

        Map<String, Object> result = new HashMap<String, Object>();

        result.put("timeStamp", (start + end) / 2000);
        result.put("period", (end - start) / 1000);
        result.put("requests", count);
        result.put("duration", duration);
        result.put("size", size);

        return result;
    }
}
