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
package org.neo4j.server.extension.statistic;

import org.codehaus.jackson.map.ObjectMapper;
import org.neo4j.server.logging.Logger;

import javax.ws.rs.core.Response;
import java.io.IOException;
import java.io.StringWriter;
import java.util.*;

import static java.lang.String.format;
import static javax.ws.rs.core.Response.Status.OK;

/**
 * statistics-collector will keep n-statistic records
 *
 * @author tbaum
 * @since 31.05.11 20:23
 */
public class StatisticCollector extends TimerTask {

    private static final Logger LOG = Logger.getLogger(StatisticCollector.class);

    private volatile long start = System.currentTimeMillis();
    private volatile long count = 0;
    private volatile StatisticData currentSize = StatisticData.empty();
    private volatile StatisticData currentDuration = StatisticData.empty();

    private final List<StatisticRecord> records = new LinkedList<StatisticRecord>();
    private final int purgeTime;

    public StatisticCollector(final int purgeTime) {
        this.purgeTime = purgeTime;
    }


    @Override public void run() {
        System.err.println("snap!");
        snapshot();

        purgeStatistics(System.currentTimeMillis() / 1000 - purgeTime);
    }

    /**
     * remove statistic-records that are older than @param toValue including this timestamp
     *
     * @param toValue timestamp in seconds
     */
    public synchronized void purgeStatistics(final long toValue) {
        Iterator<StatisticRecord> iterator = records.iterator();
        while (iterator.hasNext() && (iterator.next().getTimeStamp()) <= toValue) {
            iterator.remove();
        }
    }

    private synchronized void snapshot() {
        final StatisticData previousDuration, previousSize;
        final long timeStamp, period, previousCount, previousStart;

        synchronized (this) {
            previousDuration = currentDuration;
            previousSize = currentSize;
            previousCount = count;
            previousStart = start;

            currentDuration = StatisticData.empty();
            currentSize = StatisticData.empty();
            start = System.currentTimeMillis();
            count = 0;

            timeStamp = (start + previousStart) / 2000;
            period = (start - previousStart) / 1000;
        }

        final StatisticRecord record = new StatisticRecord(timeStamp, period, previousCount, previousDuration, previousSize);
        LOG.info(record.toString());

        records.add(record);
    }

    /**
     * @param period interval to collect/sum data in seconds
     */
    public void startTimer(final int period) {
        new Timer("statistic-collector", true).schedule(this, period * 1000, period * 1000);
    }

    /**
     * add one datapoint for statistics
     *
     * @param time duration of the request
     * @param size size in bytes of the request
     */
    public synchronized void update(final double time, final long size) {
        currentDuration = currentDuration.addValue(time);
        currentSize = currentSize.addValue(size);
        count++;
    }

    /**
     * dump all records as json into writer
     */
    public Response createJsonResponse() throws IOException {
        final StringWriter w = new StringWriter();
        new ObjectMapper().writer().writeValue(w, records);
        return Response.status(OK).entity(w.toString()).build();
    }

    public Response createHtmlResponse() throws IOException {
        final StringWriter w = new StringWriter();
        w.write("<table>");

        w.write("<tr>" +
                "<th>Time</th><th>Request</th>" +
                "<th>Duration Avg</th><th>Duration Min</th><th>Duration Max</th><th>Duration Sum</th>" +
                "<th>Size Avg</th><th>Size Min</th><th>Size Max</th><th>Size Sum</th></tr>"
        );
        for (StatisticRecord record : records) {
            final StatisticData size = record.getSize();
            final StatisticData duration = record.getDuration();

            w.write(format("<tr>" +
                    "<td>%s</td><td>%s</td>" +
                    "<td>%s</td><td>%s</td><td>%s</td><td>%s</td>" +
                    "<td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>",
                    new Date(record.getTimeStamp()), record.getRequests(),
                    duration.getAvgString(), duration.getMinString(), duration.getMaxString(), duration.getSumString(),
                    size.getAvgString(), size.getMinString(), size.getMaxString(), size.getSumString()));
        }
        w.write("</table>");
        return Response.status(OK).entity(w.toString()).build();
    }
}
