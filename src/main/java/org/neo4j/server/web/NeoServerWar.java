/**
 * Copyright (c) 2002-2010 "Neo Technology,"
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
package org.neo4j.server.web;

import org.apache.commons.configuration.Configuration;
import org.neo4j.server.NeoServer;
import org.neo4j.server.RoundRobinJobScheduler;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.database.Database;
import org.neo4j.server.database.DatabaseMode;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.osgi.OSGiContainer;
import org.neo4j.server.plugins.PluginManager;
import org.neo4j.server.rrd.RrdFactory;
import org.neo4j.server.startup.healthcheck.StartupHealthCheck;
import org.neo4j.server.startup.healthcheck.StartupHealthCheckFailedException;
import org.osgi.framework.BundleException;
import org.rrd4j.core.RrdDb;

import javax.management.MalformedObjectNameException;
import java.io.File;
import java.io.IOException;
import java.util.Map;

/**
 * @author tbaum
 * @since 05.02.11
 */
public class NeoServerWar implements NeoServer {
// ------------------------------ FIELDS ------------------------------

    public static final Logger log = Logger.getLogger(NeoServerWar.class);

    private final Configurator configurator;
    private final StartupHealthCheck startupHealthCheck;
    private final RoundRobinJobScheduler jobScheduler = new RoundRobinJobScheduler();
    private Database database;
    private OSGiContainer osgiContainer;
    private PluginManager extensions;

    public NeoServerWar(StartupHealthCheck startupHealthCheck, Configurator configurator) {
        this.startupHealthCheck = startupHealthCheck;
        this.configurator = configurator;
    }

    @Override public Database getDatabase() {
        return database;
    }

    @Override public PluginManager getExtensionManager() {
        return extensions;
    }


    @Override public void start() {
        startupHealthCheck();
        startDatabase();
        try {
            startRoundRobinDB();
            startOsgiContainer();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        loadExtensions();
    }

    @Override public void stop() {
        stopJobs();
        stopDatabase();

        try {
            stopOsgiContainer();
        } catch (Exception e) {
            log.warn("Failed to cleanly shutdown Neo Server, database [%s]. Reason: %s", getDatabase().getLocation(),
                    e.getMessage());
        }
        log.info("Successfully shutdown Neo Server, database [%s]", getDatabase().getLocation());
    }

    private void loadExtensions() {
        this.extensions = new PluginManager(getConfiguration());
    }

    @Override public Configuration getConfiguration() {
        return configurator.configuration();
    }

    private void startDatabase() {
        String dbLocation = new File(configurator.configuration().getString(Configurator.DATABASE_LOCATION_PROPERTY_KEY)).getAbsolutePath();
        DatabaseMode mode = DatabaseMode.valueOf(configurator.configuration().getString(
                Configurator.DB_MODE_KEY, DatabaseMode.STANDALONE.name()).toUpperCase());
        Map<String, String> databaseTuningProperties = configurator.getDatabaseTuningProperties();
        if (databaseTuningProperties != null) {
            this.database = new Database(mode, dbLocation, databaseTuningProperties);
        } else {
            this.database = new Database(mode, dbLocation);
        }
    }

    private void startOsgiContainer() throws BundleException {
        // Start embedded OSGi container, maybe
        boolean osgiServerShouldStart = configurator.configuration().getBoolean(Configurator.ENABLE_OSGI_SERVER_PROPERTY_KEY, false);
        if (osgiServerShouldStart) {
            String bundleDirectory = configurator.configuration().getString(Configurator.OSGI_BUNDLE_DIR_PROPERTY_KEY, "../");
            String cacheDirectory = configurator.configuration().getString(Configurator.OSGI_CACHE_DIR_PROPERTY_KEY, "../");
            osgiContainer = new OSGiContainer(bundleDirectory, cacheDirectory);
            osgiContainer.start();
        }
    }

    private void startRoundRobinDB() throws MalformedObjectNameException, IOException {
        RrdDb rrdDb = RrdFactory.createRrdDbAndSampler(database.graph, jobScheduler);
        database.setRrdDb(rrdDb);
    }

    private void startupHealthCheck() {
        if (!startupHealthCheck.run()) {
            throw new StartupHealthCheckFailedException(startupHealthCheck.failedRule());
        }
    }

    private void stopDatabase() {
        if (database != null) {
            database.shutdown();
        }
    }

    private void stopJobs() {
        jobScheduler.stopJobs();
    }

    private void stopOsgiContainer() throws BundleException, InterruptedException {
        if (osgiContainer != null) {
            osgiContainer.shutdown();
        }
    }

}
