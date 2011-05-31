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
package org.neo4j.server;

import com.sun.jersey.api.client.Client;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mortbay.jetty.Server;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.enterprise.EnterpriseNeoServerBootstrapper;
import org.neo4j.server.startup.healthcheck.StartupHealthCheck;
import org.neo4j.server.statistic.HostedAdminStatsticContext;
import org.neo4j.server.web.Jetty6WebServer;

import javax.ws.rs.core.MediaType;
import java.io.File;
import java.io.IOException;

import static junit.framework.Assert.assertTrue;
import static org.neo4j.server.configuration.Configurator.DEFAULT_WEBSERVER_PORT;
import static org.neo4j.server.configuration.Configurator.WEBSERVER_PORT_PROPERTY_KEY;

/**
 * @author tbaum
 * @since 31.05.11 21:11
 */
public class TestStatisticInterface {
    private Server jetty;
    private File databaseDir;

    private NeoServerWithEmbeddedWebServer neoServer;

    @Before
    public void setUp() throws Exception {
        databaseDir = File.createTempFile("neo4j", "");
        databaseDir.delete();
        databaseDir.mkdirs();

        new TestBootstrapper();

        jetty.start();
    }

    @After
    public void tearDown() {
        if (neoServer != null) {
            neoServer.stop();
        }
        try {
            jetty.stop();
            jetty.join();
            jetty.setStopAtShutdown(false);
        } catch (Exception ignored) {
        }

        delete(databaseDir);
    }

    private void delete(final File dir) {
        dir.deleteOnExit();
        for (File file : dir.listFiles()) {
            if (file.isDirectory()) {
                delete(file);
            } else {
                file.deleteOnExit();
            }
        }
    }

    @Test public void testStatisticGathering() throws IOException, InterruptedException {
        final Client client = Client.create();

        final String x1 = client.resource("http://localhost:7474/admin/statistic/").get(String.class);
        final String x2 = client.resource("http://localhost:7474/").accept(MediaType.APPLICATION_JSON_TYPE).get(String.class);
        final String x3 = client.resource("http://localhost:7474/db/data/node/0").get(String.class);
        final String x4 = client.resource("http://localhost:7474/db/data").get(String.class);

        Thread.sleep(12000);

        final String s = client.resource("http://localhost:7474/admin/statistic/").get(String.class);

        final int sum = x1.length() + x2.length() + x3.length() + x4.length();
        final int min = x1.length();
        final int max = x3.length();
        System.err.println(s);
        assertTrue("should contain requests:" + 4, s.contains("\"requests\":4"));
        assertTrue("should contain sum:" + sum, s.contains("\"sum\":" + sum));
        assertTrue("should contain min:" + min, s.contains("\"min\":" + min));
        assertTrue("should contain max:" + max, s.contains("\"max\":" + max));

        final String x_rr = client.resource("http://localhost:7474/admin/statistic/?clear=" + Long.MAX_VALUE).get(String.class);

        assertTrue("should contain []", x_rr.contains("[]"));
    }

    // -------------------------- INNER CLASSES --------------------------

    public class TestBootstrapper extends EnterpriseNeoServerBootstrapper {
        public TestBootstrapper() throws Exception {
            final Configurator configurator = getConfigurator();

            configurator.configuration().setProperty(Configurator.DATABASE_LOCATION_PROPERTY_KEY, databaseDir.toString());
            jetty = new Server(configurator.configuration().getInt(WEBSERVER_PORT_PROPERTY_KEY, DEFAULT_WEBSERVER_PORT));
            jetty.setStopAtShutdown(true);

            HostedAdminStatsticContext statistics = new HostedAdminStatsticContext(jetty, "/admin/statistic", 10);

            neoServer = new NeoServerWithEmbeddedWebServer(
                    this,
                    new AddressResolver(),
                    new StartupHealthCheck(),
                    configurator,
                    new Jetty6WebServer() {
                        @Override protected Server createJetty() {
                            return jetty;
                        }

                        @Override protected void startJetty() {
                        }
                    },
                    getServerModules());

            neoServer.start();

            statistics.addTimingFilter();

            jetty.start();
        }
    }
}
