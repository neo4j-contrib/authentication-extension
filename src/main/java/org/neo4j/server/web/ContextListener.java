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

import org.neo4j.server.NeoServer;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.PropertyFileConfigurator;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.startup.healthcheck.StartupHealthCheck;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * @author tbaum
 * @since 23.01.11
 */
public class ContextListener implements ServletContextListener {

    public static final Logger LOG = Logger.getLogger(ContextListener.class);
    public static final String SERVER_KEY = NeoServer.class.getName();
    public static final String CONFIGURATOR_KEY = PropertyFileConfigurator.class.getName();

    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        final ServletContext servletContext = servletContextEvent.getServletContext();

        final Configurator configurator = ConfigUtils.getConfigurator(servletContext);
        servletContext.setAttribute(CONFIGURATOR_KEY, configurator);

        final NeoServer server = new NeoServerWar(new StartupHealthCheck(), configurator);
        server.start();

        servletContext.setAttribute(SERVER_KEY, server);
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        final ServletContext servletContext = servletContextEvent.getServletContext();
        final Object server = servletContext.getAttribute(SERVER_KEY);
        if (server instanceof NeoServer) {
            ((NeoServer) server).stop();
        }

        servletContext.removeAttribute(SERVER_KEY);
        servletContext.removeAttribute(CONFIGURATOR_KEY);
    }
}
