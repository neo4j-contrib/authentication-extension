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

import org.mortbay.jetty.Server;
import org.mortbay.jetty.SessionManager;
import org.mortbay.jetty.servlet.HashSessionManager;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.PropertyFileConfigurator;
import org.neo4j.server.enterprise.EnterpriseNeoServerBootstrapper;
import org.neo4j.server.hosted.HostedAdminContext;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.security.MultipleAuthenticationService;
import org.neo4j.server.security.SingleUserAuthenticationService;
import org.neo4j.server.statistic.HostedAdminStatsticContext;
import org.neo4j.server.web.Jetty6PatchedWebServer;

import java.io.File;

import static org.neo4j.server.Util.invokePrivate;

/**
 * @author tbaum
 * @since 14.04.11 13:04
 */
public class HostedBootstrapper extends EnterpriseNeoServerBootstrapper {

    private static Logger log = Logger.getLogger(Bootstrapper.class);

    private NeoServerWithEmbeddedWebServer neoServer;

    private final Thread shutdownHook = new Thread() {
        @Override public void run() {
            shutdown();
        }
    };

    private Server jetty;
    private final SessionManager sm = new HashSessionManager();
    private PropertyFileConfigurator configurator = new PropertyFileConfigurator(getConfigFile());

    private void shutdown() {
        log.info("Neo4j Server shutdown initiated by kill signal");
        if (neoServer != null) {
            neoServer.stop();
        }
        try {
            jetty.stop();
            jetty.join();
            jetty.setStopAtShutdown(false);
        } catch (Exception ignored) {
        }
        neoServer = null;
        jetty = null;
    }

    @Override public Integer start(String[] args) {
        try {
            Runtime.getRuntime().addShutdownHook(shutdownHook);

            jetty = startJetty();
            final String masterCredendials = configurator.configuration().getString("org.neo4j.server.credentials");
            if (masterCredendials == null) {
                throw new RuntimeException("missing master-credentials in neo4j-server.properties");
            }
            SingleUserAuthenticationService adminAuth = new SingleUserAuthenticationService(masterCredendials);
            MultipleAuthenticationService users = new MultipleAuthenticationService(getAclConfigFile());

            HostedAdminStatsticContext statistics = new HostedAdminStatsticContext(jetty, "/admin/statistic", adminAuth);
            HostedAdminContext admin = new HostedAdminContext(jetty, adminAuth, users);

            loadVirtualServer();

            admin.addSecurityFilter();
            statistics.addTimingFilter();

            jetty.start();

            log.info("startup succeeded");

            return Bootstrapper.OK;
        } catch (Exception e) {
            log.error("got exception " + e + " will exit");
            System.exit(Bootstrapper.WEB_SERVER_STARTUP_ERROR_CODE);
            return Bootstrapper.WEB_SERVER_STARTUP_ERROR_CODE;
        }
    }

    private Server startJetty() throws Exception {
        final Server jetty = new Server(configurator.configuration().getInt(Configurator.WEBSERVER_PORT_PROPERTY_KEY,
                Configurator.DEFAULT_WEBSERVER_PORT));
        jetty.setStopAtShutdown(true);
        return jetty;
    }

    private File getAclConfigFile() {
        return new File(getConfigFile().getParentFile(), "db-acl.properties");
    }

    private void loadVirtualServer() {
        final Jetty6PatchedWebServer patchedWebServer = new Jetty6PatchedWebServer(sm, jetty);

        final File configFile = new File("conf/neo4j-server.properties");
        this.neoServer = new NeoServerWithEmbeddedWebServer(this,
                new AddressResolver(), null, configFile, patchedWebServer, getServerModules());

        //TODO refactor NeoServerWithEmbeddedWebServer.start()
        invokePrivate(neoServer, neoServer.getClass(), "validateConfiguration");
        invokePrivate(neoServer, neoServer.getClass(), "startDatabase");
        invokePrivate(neoServer, neoServer.getClass(), "startExtensionInitialization");
        invokePrivate(neoServer, neoServer.getClass(), "startModules");
        invokePrivate(neoServer, neoServer.getClass(), "startWebServer");
    }
}
