/**
 * Copyright (c) 2002-2011 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package org.neo4j.server;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.HttpConnection;
import org.mortbay.jetty.Request;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;
import org.mortbay.jetty.servlet.FilterHolder;
import org.neo4j.graphdb.TransactionFailureException;
import org.neo4j.helpers.collection.IteratorUtil;
import org.neo4j.kernel.AbstractGraphDatabase;
import org.neo4j.kernel.EmbeddedGraphDatabase;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.database.GraphDatabaseFactory;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.modules.*;
import org.neo4j.server.startup.healthcheck.ConfigFileMustBePresentRule;
import org.neo4j.server.startup.healthcheck.Neo4jPropertiesMustExistRule;
import org.neo4j.server.startup.healthcheck.StartupHealthCheck;
import org.neo4j.server.startup.healthcheck.StartupHealthCheckRule;
import org.neo4j.server.web.Jetty6WebServer;
import uk.org.lidalia.sysoutslf4j.context.SysOutOverSLF4J;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Bootstrapper {
    public static void main(String[] args) {
        configureLogging();

        new Bootstrapper().start(args);
    }

    public Iterable<StartupHealthCheckRule> getHealthCheckRules() {
        return Arrays.asList(new ConfigFileMustBePresentRule(), new Neo4jPropertiesMustExistRule());
    }

    @SuppressWarnings("unchecked")
    public Iterable<Class<? extends ServerModule>> getServerModules() {
        return Arrays.asList(DiscoveryModule.class, RESTApiModule.class, ManagementApiModule.class,
                ThirdPartyJAXRSModule.class, WebAdminModule.class);
    }

    protected GraphDatabaseFactory getGraphDatabaseFactory(Configuration configuration) {
        return new GraphDatabaseFactory() {
            @Override
            public AbstractGraphDatabase createDatabase(String databaseStoreDirectory,
                                                        Map<String, String> databaseProperties) {
                return new EmbeddedGraphDatabase(databaseStoreDirectory, databaseProperties);
            }
        };
    }

    public static final Integer OK = 0;
    public static final Integer WEB_SERVER_STARTUP_ERROR_CODE = 1;
    public static final Integer GRAPH_DATABASE_STARTUP_ERROR_CODE = 2;
    public static final String KEY_LOG4J_CONFIG_XML_PATH = "log4j.config.xml.path";

    private static Logger log = Logger.getLogger(Bootstrapper.class);

    private Map<String, NeoServerWithEmbeddedWebServer> server = new HashMap<String, NeoServerWithEmbeddedWebServer>();

    public void controlEvent(int arg) {
        // Do nothing, required by the WrapperListener interface
    }

    public Integer start() {
        return start(new String[0]);
    }

    public Integer start(String[] args) {
        try {

            final File configFile1 = new File("conf/hosts.properties");
            final PropertiesConfiguration hosts = new PropertiesConfiguration(configFile1);


            final StartupHealthCheck startupHealthCheck = new StartupHealthCheck(rules());
            final Server jetty = new Server(7474);
            jetty.setStopAtShutdown(true);

            jetty.start();
            Context handler = new Context(jetty, "/admx") {
                @Override
                public void handle(String target, HttpServletRequest request, HttpServletResponse response, int dispatch) throws IOException, ServletException {
                    Request base_request = (request instanceof Request) ? (Request) request : HttpConnection.getCurrentConnection().getRequest();
                    if (target.startsWith("/admx/add")) {
                        base_request.setHandled(true);
                        String db = request.getParameter("db");
                        String cred = request.getParameter("cred");
                        System.err.println("add:" + db + "/" + cred);

                        hosts.addProperty(db, cred);
                        try {
                            hosts.save(configFile1);
                        } catch (ConfigurationException e) {
                            throw new RuntimeException(e);

                        }
                        createVServer(startupHealthCheck, jetty, db);
                        restartJetty(jetty);


                    } else if (target.startsWith("/admx/remove")) {
                        base_request.setHandled(true);
                        String db = request.getParameter("db");
                        System.err.println("rem:" + db);
                        hosts.clearProperty(db);
                        try {
                            hosts.save(configFile1);
                        } catch (ConfigurationException e) {
                            throw new RuntimeException(e);
                        }
                        removeVServer(db);
                        restartJetty(jetty);


                    }

                }
            };
            FilterHolder holder = new FilterHolder(new Filter() {
                @Override public void init(FilterConfig filterConfig) throws ServletException {
                    //To change body of implemented methods use File | Settings | File Templates.
                }

                @Override
                public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
                    System.err.println("filter " + request.getServerName());
                    chain.doFilter(request, response);

                }

                @Override public void destroy() {
                    //To change body of implemented methods use File | Settings | File Templates.
                }
            });
            handler.addFilter(holder, "*", Handler.ALL);
            //   jetty.addHandler(handler);
            // handler.start();

            for (String o : toIter((Iterator<String>) hosts.getKeys())) {
                System.err.println("--> " + o);
                createVServer(startupHealthCheck, jetty, o);
            }
            //  jetty.start();
            restartJetty(jetty);
            //    jetty.sxtart();

//            webServer.stopHttp();
//            webServer.startHttp();


            Runtime.getRuntime().addShutdownHook(new Thread() {
                @Override
                public void run() {
                    log.info("Neo4j Server shutdown initiated by kill signal");
                    if (server != null) {
                        for (NeoServerWithEmbeddedWebServer neoServerWithEmbeddedWebServer : server.values()) {
                            try {
                                neoServerWithEmbeddedWebServer.stop();
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                        }
                    }
                }
            });

            return OK;
        } catch (TransactionFailureException tfe) {
            tfe.printStackTrace();
            log.error(String.format("Failed to start Neo Server on port [%d], because ", -1)
                    + tfe + ". Another process may be using database location " + "????");
            return GRAPH_DATABASE_STARTUP_ERROR_CODE;
        } catch (Exception e) {
            e.printStackTrace();
            log.error("Failed to start Neo Server on port [%s]", -1);
            return WEB_SERVER_STARTUP_ERROR_CODE;
        }
    }

    private void restartJetty(Server jetty) {
        try {


            //TODO ????
            jetty.getHandler().stop();
            jetty.getHandler().start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void removeVServer(final String test3) {
        server.get(test3).stop();
    }

    private void createVServer(StartupHealthCheck startupHealthCheck, Server jetty, String o) {
        Jetty6WebServer webServer = new Jetty6WebServer(jetty, o);

        File configFile = new File("conf/neo4j-server.properties");
        NeoServerWithEmbeddedWebServer neoServer =
                new NeoServerWithEmbeddedWebServer(this, new AddressResolver(), startupHealthCheck, configFile, webServer, getServerModules());
        server.put(o, neoServer);

        Configuration configuration = neoServer.getConfigurator().configuration();

        String dbLocation = configuration.getString(Configurator.DATABASE_LOCATION_PROPERTY_KEY);
        configuration.setProperty(Configurator.DATABASE_LOCATION_PROPERTY_KEY, dbLocation + "/" + o);
        System.err.println(dbLocation);
        neoServer.start();
    }

    private <T> Iterable<T> toIter(final Iterator<T> keys) {
        return new Iterable<T>() {
            @Override public Iterator<T> iterator() {
                return keys;
            }
        };
    }


    private StartupHealthCheckRule[] rules() {
        return IteratorUtil.asCollection(getHealthCheckRules()).toArray(new StartupHealthCheckRule[0]);
    }


    public void stop() {
        stop(0);
    }

    public int stop(int stopArg) {
        String location = "unknown location";
        try {
            log.info("Successfully shutdown Neo Server on port [%d], database [%s]", -1,
                    location);
            return 0;
        } catch (Exception e) {
            log.error("Failed to cleanly shutdown Neo Server on port [%d], database [%s]. Reason [%s] ",
                    -1, location, e.getMessage());
            return 1;
        }
    }


    protected boolean isMoreDerivedThan(Bootstrapper other) {
        // Default implementation just checks if this is a subclass of other
        return other.getClass().isAssignableFrom(getClass());
    }

    private static void configureLogging() {
        SysOutOverSLF4J.sendSystemOutAndErrToSLF4J();
    }
}
