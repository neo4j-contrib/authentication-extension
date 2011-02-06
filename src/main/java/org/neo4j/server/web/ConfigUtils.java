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

import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.PropertyFileConfigurator;
import org.neo4j.server.logging.Logger;

import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import java.io.File;

import static java.lang.String.format;
import static java.lang.System.getProperty;
import static org.neo4j.server.configuration.Configurator.NEO_SERVER_CONFIG_FILE_KEY;

/**
 * @author tbaum
 * @since 23.01.11
 */
public class ConfigUtils {
    public static final Logger LOG = Logger.getLogger(ConfigUtils.class);

    //TODO move
    public static final String NEO_SERVER_BASE_KEY = "org.neo4j.server.base";
    public static final String NEO_SERVER_AUTH_USER_KEY = "org.neo4j.server.auth.user";
    public static final String NEO_SERVER_AUTH_PASS_KEY = "org.neo4j.server.auth.pass";

    public static Configurator getConfigurator(final ServletContext servletContext) {

        final String serverConfigFile = locateAppConfig(servletContext);
        if (serverConfigFile != null)
            return new PropertyFileConfigurator(new File(serverConfigFile));

        return new JNDIConfigurator();
    }

    private static String locateAppConfig(final ServletContext servletContext) {
        String contextPath = servletContext.getContextPath();
        if (contextPath.startsWith("/")) {
            contextPath = contextPath.substring(1);
        }

        if (contextPath.isEmpty()) {
            contextPath = "ROOT";
        }

        final String serverBase = getProperty(NEO_SERVER_BASE_KEY);

        if (serverBase == null) {
            LOG.warn(format("property %s not set!", NEO_SERVER_BASE_KEY));
            return null;
        }

        final String defaultConfigFile = serverBase + File.separator + contextPath + File.separator +
                "neo4j-server.properties";

        return getProperty(NEO_SERVER_CONFIG_FILE_KEY, defaultConfigFile);
    }
}
