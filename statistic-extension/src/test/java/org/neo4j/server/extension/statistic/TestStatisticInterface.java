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

import com.sun.jersey.api.client.Client;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.neo4j.server.NeoServerBootstrapper;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Map;

import static java.lang.Math.max;
import static java.lang.Math.min;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON_TYPE;
import static org.junit.Assert.assertEquals;

/**
 * @author tbaum
 * @since 31.05.11 21:11
 */
public class TestStatisticInterface {

    private File databaseDir;
    private TestBootstrapper testBootstrapper;

    @Before
    public void setUp() throws Exception {
        databaseDir = File.createTempFile("neo4j", "");
        databaseDir.delete();
        databaseDir.mkdirs();

        //TODO replace this!!
        testBootstrapper = new TestBootstrapper();
        testBootstrapper.start();
    }

    @After
    public void tearDown() {
        testBootstrapper.stop();
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

        final String req1 = client.resource("http://localhost:7474/admin/statistic").get(String.class);
        final String req2 = client.resource("http://localhost:7474/").accept(APPLICATION_JSON_TYPE).get(String.class);
        final String req3 = client.resource("http://localhost:7474/db/data/node/0").get(String.class);
        final String req4 = client.resource("http://localhost:7474/db/data").get(String.class);

        Thread.sleep(12000);

        final String statisticInfo = client.resource("http://localhost:7474/admin/statistic")
                .accept(APPLICATION_JSON_TYPE).get(String.class);

        final int sum = req1.length() + req2.length() + req3.length() + req4.length();
        final int min = min(min(req1.length(), req2.length()), min(req3.length(), req4.length()));
        final int max = max(max(req1.length(), req2.length()), max(req3.length(), req4.length()));

        @SuppressWarnings({"unchecked"}) List<Map> result = (List<Map>) new ObjectMapper().readValue(statisticInfo, Object.class);


        System.err.println("================>" + statisticInfo);

        final Map firstRecord = result.get(0);
        final Map sizeMap = (Map) firstRecord.get("size");
        assertEquals("should contain one statistic record", 1, result.size());
        assertEquals("should contain requests:", 4, firstRecord.get("requests"));
        assertEquals("should contain sum:", sum, sizeMap.get("sum"));
        assertEquals("should contain min:", min, sizeMap.get("min"));
        assertEquals("should contain max:", max, sizeMap.get("max"));

        final String emptyStatisticInfo = client.resource("http://localhost:7474/admin/statistic?clear=" + Long.MAX_VALUE)
                .accept(APPLICATION_JSON_TYPE).get(String.class);

        assertEquals("should contain []", "[]", emptyStatisticInfo);
    }

// -------------------------- INNER CLASSES --------------------------

    public class TestBootstrapper extends NeoServerBootstrapper {
        public TestBootstrapper() {
            final URL resource = getClass().getResource("/test-neo4j-server.properties");
            System.err.println(resource.getFile());
            System.setProperty("org.neo4j.server.properties", resource.getFile());
        }

        /*
     @Override protected Configurator getConfigurator() {
         final Configurator configurator = super.getConfigurator();
         configurator.configuration().setProperty(Configurator.DATABASE_LOCATION_PROPERTY_KEY, databaseDir.toString());
               configurator.configuration().setProperty("org.neo4j.server.thirdparty_jaxrs_classes", "org.neo4j.server.extension.auth=/admin");
               configurator.configuration().setProperty("org.neo4j.server.credentials", adminCred);
               return configurator;
     }   */
    }
}
