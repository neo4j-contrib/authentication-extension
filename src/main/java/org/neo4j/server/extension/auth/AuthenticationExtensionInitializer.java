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

import org.apache.commons.configuration.Configuration;
import org.neo4j.graphdb.GraphDatabaseService;
import org.neo4j.kernel.GraphDatabaseAPI;
import org.neo4j.server.AbstractNeoServer;
import org.neo4j.server.NeoServer;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.ThirdPartyJaxRsPackage;
import org.neo4j.server.database.Database;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.plugins.Injectable;
import org.neo4j.server.plugins.SPIPluginLifecycle;
import org.neo4j.server.web.WebServer;

import java.util.Arrays;
import java.util.Collection;

import static org.neo4j.server.plugins.TypedInjectable.injectable;

public class AuthenticationExtensionInitializer implements SPIPluginLifecycle {
    private static final Logger LOG = new Logger(AuthenticationExtensionInitializer.class);

    @Override
    public Collection<Injectable<?>> start(final GraphDatabaseService graphDatabaseService, final Configuration config) {
        throw new IllegalAccessError();
    }

    public void stop() {
    }

    @Override
    public Collection<Injectable<?>> start(final NeoServer neoServer) {
        LOG.info("START " + AuthenticationExtensionInitializer.class.toString());

        WebServer webServer = getWebServer(neoServer);
        final Configurator configurator = neoServer.getConfigurator();
        final Configuration configuration = neoServer.getConfiguration();

        final String masterCredendials = configuration.getString("org.neo4j.server.credentials");
        if (masterCredendials == null) {
            throw new RuntimeException("missing master-credentials in neo4j-server.properties");
        }

        final SingleUserAuthenticationService adminAuth = new SingleUserAuthenticationService(masterCredendials);
        Database database = neoServer.getDatabase();
        GraphDatabaseAPI graphDatabaseAPI = database.getGraph();
        final MultipleAuthenticationService users = new MultipleAuthenticationService(graphDatabaseAPI,
                graphDatabaseAPI.getNodeManager(), graphDatabaseAPI.getKernelData());

        webServer.addFilter(new AuthenticationFilter(users, "neo4j graphdb"), "/*");
        webServer.addFilter(new AuthenticationFilter(adminAuth, "neo4j-admin"), getMyMountpoint(configurator) + "/*");

        return Arrays.<Injectable<?>>asList(injectable(users));
    }

    private WebServer getWebServer(final NeoServer neoServer) {
        if (neoServer instanceof AbstractNeoServer) {
            return ((AbstractNeoServer) neoServer).getWebServer();
        }
        throw new IllegalArgumentException("expected AbstractNeoServer");
    }

    private String getMyMountpoint(final Configurator configurator) {
        final String packageName = getClass().getPackage().getName();

        for (ThirdPartyJaxRsPackage o : configurator.getThirdpartyJaxRsClasses()) {
            if (o.getPackageName().equals(packageName)) {
                return o.getMountPoint();
            }
        }
        throw new RuntimeException("unable to resolve our mountpoint?");
    }
}
