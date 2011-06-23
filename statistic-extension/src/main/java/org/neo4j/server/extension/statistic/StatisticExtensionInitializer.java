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

import org.apache.commons.configuration.Configuration;
import org.mortbay.jetty.Server;
import org.neo4j.graphdb.GraphDatabaseService;
import org.neo4j.server.NeoServer;
import org.neo4j.server.NeoServerWithEmbeddedWebServer;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.PropertyFileConfigurator;
import org.neo4j.server.configuration.ThirdPartyJaxRsPackage;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.plugins.Injectable;
import org.neo4j.server.plugins.SPIPluginLifecycle;

import java.io.File;
import java.util.Arrays;
import java.util.Collection;

import static org.neo4j.server.plugins.TypedInjectable.injectable;

public class StatisticExtensionInitializer implements SPIPluginLifecycle {

    private static final Logger LOG = new Logger(StatisticExtensionInitializer.class);
    private   StatisticCollector statisticCollector;


    @Override
    public Collection<Injectable<?>> start(final GraphDatabaseService graphDatabaseService, final Configuration config) {
        throw new IllegalAccessError();
    }

    public void stop() {
    }

    @Override
    public Collection<Injectable<?>> start(final NeoServer neoServer) {
        LOG.info("START " + StatisticExtensionInitializer.class.toString());

        final Server jetty = getJetty(neoServer);
        final Configuration configuration = neoServer.getConfiguration();
   //purge statistics older than 24hrs

        statisticCollector = new StatisticCollector(configuration.getInt("org.neo4j.server.statistic.purgetime",60 * 60 * 24));

        statisticCollector.startTimer(configuration.getInt("org.neo4j.server.statistic.timeframe",60));
        jetty.addLifeCycleListener(new StatisticStartupListner(
                jetty,
                new StatisticFilter(statisticCollector)));

        return Arrays.<Injectable<?>>asList(injectable(statisticCollector));
    }

    private Server getJetty(final NeoServer neoServer) {
        if (neoServer instanceof NeoServerWithEmbeddedWebServer) {
            final NeoServerWithEmbeddedWebServer server = (NeoServerWithEmbeddedWebServer) neoServer;
            return server.getWebServer().getJetty();
        } else {
            throw new IllegalArgumentException("expected NeoServerWithEmbeddedWebServer");
        }
    }
}
