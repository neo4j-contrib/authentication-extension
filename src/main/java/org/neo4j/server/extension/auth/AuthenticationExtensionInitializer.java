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
import org.mortbay.jetty.Server;
import org.neo4j.graphdb.GraphDatabaseService;
import org.neo4j.kernel.AbstractGraphDatabase;
import org.neo4j.server.NeoServer;
import org.neo4j.server.NeoServerWithEmbeddedWebServer;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.ThirdPartyJaxRsPackage;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.plugins.Injectable;
import org.neo4j.server.plugins.SPIPluginLifecycle;

import java.io.File;
import java.util.Arrays;
import java.util.Collection;

import static org.neo4j.server.plugins.TypedInjectable.injectable;

public class AuthenticationExtensionInitializer implements SPIPluginLifecycle {
    private static final String ACL_LOCATION_PROPERTY_KEY = "org.neo4j.server.authentification.acl-file";
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

        final Server jetty = getJetty(neoServer);
        final Configurator configurator = neoServer.getConfigurator();
        final Configuration configuration = neoServer.getConfiguration();

        final String masterCredendials = configuration.getString("org.neo4j.server.credentials");
        if (masterCredendials == null) {
            throw new RuntimeException("missing master-credentials in neo4j-server.properties");
        }

        final SingleUserAuthenticationService adminAuth = new SingleUserAuthenticationService(masterCredendials);
        final File aclConfigFile = getAclFile(neoServer);
        final MultipleAuthenticationService users = new MultipleAuthenticationService(aclConfigFile);

        jetty.addLifeCycleListener(new AuthenticationStartupListner(
                jetty,
                new AuthenticationFilter(users, "neo4j graphdb"),
                getMyMountpoint(configurator),
                new AuthenticationFilter(adminAuth, "neo4j-admin")));

        return Arrays.<Injectable<?>>asList(injectable(users));
    }

    private File getAclFile(NeoServer neoServer) {
        AbstractGraphDatabase graph = neoServer.getDatabase().graph;
        Configuration config = neoServer.getConfiguration();
        return new File(config.getString(ACL_LOCATION_PROPERTY_KEY, getDefaultAclFile(graph)));
    }

    private String getDefaultAclFile(AbstractGraphDatabase db) {
        return new File(db.getStoreDir(), "../conf/db-acl.properties").getAbsolutePath();
    }

    private Server getJetty(final NeoServer neoServer) {
        if (neoServer instanceof NeoServerWithEmbeddedWebServer) {
            final NeoServerWithEmbeddedWebServer server = (NeoServerWithEmbeddedWebServer) neoServer;
            return server.getWebServer().getJetty();
        } else {
            throw new IllegalArgumentException("expected NeoServerWithEmbeddedWebServer");
        }
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
