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
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.PropertyFileConfigurator;
import org.neo4j.server.enterprise.EnterpriseNeoServerBootstrapper;
import org.neo4j.server.hosted.HostedAdminContext;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.security.MultipleAuthenticationService;
import org.neo4j.server.security.SingleUserAuthenticationService;
import org.neo4j.server.startup.healthcheck.StartupHealthCheck;
import org.neo4j.server.statistic.HostedAdminStatsticContext;
import org.neo4j.server.web.Jetty6WebServer;

import java.io.File;

import static org.neo4j.server.configuration.Configurator.DEFAULT_WEBSERVER_PORT;
import static org.neo4j.server.configuration.Configurator.WEBSERVER_PORT_PROPERTY_KEY;

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

            final Configurator config = getConfigurator();

            jetty = new Server(config.configuration().getInt(WEBSERVER_PORT_PROPERTY_KEY, DEFAULT_WEBSERVER_PORT));
            jetty.setStopAtShutdown(true);

            final String masterCredendials = config.configuration().getString("org.neo4j.server.credentials");
            if (masterCredendials == null) {
                throw new RuntimeException("missing master-credentials in neo4j-server.properties");
            }
            SingleUserAuthenticationService adminAuth = new SingleUserAuthenticationService(masterCredendials);
            MultipleAuthenticationService users = new MultipleAuthenticationService(getAclConfigFile(config));

            HostedAdminStatsticContext statistics = new HostedAdminStatsticContext(jetty, "/admin/statistic", adminAuth, 60);
            HostedAdminContext admin = new HostedAdminContext(jetty, "/admin", adminAuth, users);

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

    private File getAclConfigFile(final Configurator configurator) {
        if (!(configurator instanceof PropertyFileConfigurator)) {
            throw new RuntimeException("expecting configuration to be a PropertyFileConfigurator");
        }
        PropertyFileConfigurator propertyFileConfigurator = (PropertyFileConfigurator) configurator;

        return new File(propertyFileConfigurator.getPropertyFileDirectory(), "db-acl.properties");
    }

    private void loadVirtualServer() {
        this.neoServer = new NeoServerWithEmbeddedWebServer(
                this,
                new AddressResolver(),
                new StartupHealthCheck(),
                getConfigurator(),
                new Jetty6WebServer() {
                    @Override protected Server createJetty() {
                        return jetty;
                    }

                    @Override protected void startJetty() {
                    }
                },
                getServerModules());

        neoServer.start();
    }
}
