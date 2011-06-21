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
import com.sun.jersey.api.client.UniformInterfaceException;
import com.sun.jersey.api.client.filter.HTTPBasicAuthFilter;
import com.sun.jersey.core.util.MultivaluedMapImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mortbay.jetty.Server;
import org.neo4j.server.enterprise.EnterpriseNeoServerBootstrapper;

import javax.ws.rs.core.MultivaluedMap;
import java.io.File;
import java.io.IOException;
import java.net.URL;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.fail;

/**
 * @author tbaum
 * @since 31.05.11 21:11
 */
public class TestAuthentification {
    private Server jetty;
    private File databaseDir;
    private File aclfile;

    private NeoServerWithEmbeddedWebServer neoServer;
    private String adminCred = "neo4j:master";
    private TestBootstrapper testBootstrapper;

    @Before
    public void setUp() throws Exception {
        aclfile = File.createTempFile("neo4j-acl", "");
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

    @Test public void expecting401() throws IOException, InterruptedException {
        Client client = Client.create();


        try {
            client.resource("http://localhost:7474/").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }

        try {
            client.resource("http://localhost:7474/db/data").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }


        try {
            client.resource("http://localhost:7474/admin/add-user-ro").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }


        try {
            client.resource("http://localhost:7474/admin/add-user-ro").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }

        try {
            client.resource("http://localhost:7474/admin/add-user-rw").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }

        try {
            client.resource("http://localhost:7474/admin/remove-user").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }
    }

    @Test public void addRoAndRemoveUserTest() throws IOException, InterruptedException {
        System.err.println(aclfile);

        Client adminClient = Client.create();
        adminClient.addFilter(new HTTPBasicAuthFilter("neo4j", "master"));

        MultivaluedMap formData = new MultivaluedMapImpl();
        formData.add("user", "test:pass");

        assertEquals("OK", adminClient.resource("http://localhost:7474/admin/add-user-ro").post(String.class, formData));


        Client client = Client.create();
        client.addFilter(new HTTPBasicAuthFilter("test", "pass"));

        client.resource("http://localhost:7474/").get(String.class);
        client.resource("http://localhost:7474/db/data").get(String.class);

        try {
            client.resource("http://localhost:7474/db/data/node").post(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }

        assertEquals("OK", adminClient.resource("http://localhost:7474/admin/remove-user").post(String.class, formData));

        try {
            client.resource("http://localhost:7474/db/data/node").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }

        try {
            client.resource("http://localhost:7474/db/data").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }
    }

    @Test public void addRwAndRemoveUserTest() throws IOException, InterruptedException {
        System.err.println(aclfile);

        Client adminClient = Client.create();
        adminClient.addFilter(new HTTPBasicAuthFilter("neo4j", "master"));

        MultivaluedMap formData = new MultivaluedMapImpl();
        formData.add("user", "test:pass");

        assertEquals("OK", adminClient.resource("http://localhost:7474/admin/add-user-rw").post(String.class, formData));


        Client client = Client.create();
        client.addFilter(new HTTPBasicAuthFilter("test", "pass"));

        client.resource("http://localhost:7474/").get(String.class);
        client.resource("http://localhost:7474/db/data").get(String.class);

        client.resource("http://localhost:7474/db/data/node").post(String.class);


        assertEquals("OK", adminClient.resource("http://localhost:7474/admin/remove-user").post(String.class, formData));


        try {
            client.resource("http://localhost:7474/").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }

        try {
            client.resource("http://localhost:7474/db/data").get(String.class);
            fail();
        } catch (UniformInterfaceException e) {
            assertEquals("expecting responsecode 401", 401, e.getResponse().getStatus());
        }
    }

    public class TestBootstrapper extends EnterpriseNeoServerBootstrapper {
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
