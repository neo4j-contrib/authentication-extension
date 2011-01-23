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

import com.sun.jersey.api.core.ResourceConfig;
import com.sun.jersey.spi.container.WebApplication;
import com.sun.jersey.spi.container.servlet.ServletContainer;
import com.sun.jersey.spi.container.servlet.WebConfig;
import org.neo4j.server.NeoServer;
import org.neo4j.server.NeoServerProvider;
import org.neo4j.server.configuration.ConfigurationProvider;
import org.neo4j.server.database.DatabaseProvider;
import org.neo4j.server.plugins.PluginInvocatorProvider;
import org.neo4j.server.rest.repr.InputFormatProvider;
import org.neo4j.server.rest.repr.OutputFormatProvider;
import org.neo4j.server.rest.repr.RepresentationFormatRepository;
import org.neo4j.server.rrd.RrdDbProvider;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import java.util.Set;

/**
 * @author tbaum
 * @since 23.01.11
 */
public class WarNeoServletContainer extends ServletContainer {

    private NeoServer server;

    @Override
    public void init(ServletConfig config) throws ServletException {
        final ServletContext servletContext = config.getServletContext();
        final Object server = servletContext.getAttribute(ContextListener.CONTEXT_NAME);
        if (server instanceof NeoServer) {
            this.server = ((NeoServer) server);
        } else {
            throw new ServletException("server not found, missing context-listener in web.xml?");
        }
        super.init(config);
    }

    @Override
    protected void configure(WebConfig wc, ResourceConfig rc, WebApplication wa) {
        super.configure(wc, rc, wa);

        final Set<Object> singletons = rc.getSingletons();
        singletons.add(new DatabaseProvider(server.getDatabase()));
        singletons.add(new NeoServerProvider(server));
        singletons.add(new ConfigurationProvider(server.getConfiguration()));
        singletons.add(new RrdDbProvider(server.getDatabase().rrdDb()));

        RepresentationFormatRepository repository = new RepresentationFormatRepository(server.getExtensionManager());
        singletons.add(new InputFormatProvider(repository));
        singletons.add(new OutputFormatProvider(repository));

        singletons.add(new PluginInvocatorProvider(server.getExtensionManager()));
    }
}
