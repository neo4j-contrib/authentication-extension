package org.neo4j.server;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.mortbay.jetty.Server;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.web.Jetty6VirtualHostWebServer;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import static org.neo4j.server.Util.invokePrivate;

/**
 * @author tbaum
 * @since 14.04.11 13:04
 */
public class HostedBootstrapper extends NeoServerBootstrapper {

    private static Logger log = Logger.getLogger(Bootstrapper.class);

    private final Map<String, NeoServer> server = new HashMap<String, NeoServer>();
    private final File configFile = new File("conf/hosts.properties");

    private Server jetty;
    private PropertiesConfiguration hosts;

    @Override public Integer start(String[] args) {
        try {
            hosts = new PropertiesConfiguration(configFile);

            jetty = new Server(7474);  //TODO read from configuration?
            jetty.setStopAtShutdown(true);
            jetty.start();

            new HostedContext(this, jetty, hosts);

            Iterator it = hosts.getKeys();
            while (it.hasNext()) {
                String name = (String) it.next();
                log.info("deploying host " + name);
                loadVirtualServer(name);
            }

            restartJetty();

            Runtime.getRuntime().addShutdownHook(new Thread() {
                @Override
                public void run() {
                    log.info("Neo4j Server shutdown initiated by kill signal");
                    for (NeoServer neoServer : server.values()) {
                        try {
                            neoServer.stop();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                    try {
                        jetty.stop();
                        jetty.join();
                        jetty.setStopAtShutdown(false);
                    } catch (Exception ignored) {
                    }
                }
            });
            return Bootstrapper.OK;
        } catch (Exception e) {
            return Bootstrapper.WEB_SERVER_STARTUP_ERROR_CODE;
        }
    }

    public void restartJetty() {
        try {
            jetty.getHandler().stop();
            jetty.getHandler().start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void createVirtualServer(String serverName, String cred) {
        log.info("create host " + serverName);
        hosts.addProperty(serverName, cred);
        storeConfig();
        loadVirtualServer(serverName);
        restartJetty();
    }

    public void removeVirtualServer(String serverName) {
        log.info("remove host " + serverName);
        hosts.clearProperty(serverName);
        storeConfig();
        unloadVirtualServer(serverName);
        restartJetty();
    }

    private void loadVirtualServer(String serverName) {
        Jetty6VirtualHostWebServer virtualHostWebServer = new Jetty6VirtualHostWebServer(jetty, serverName);

        File configFile = new File("conf/neo4j-server.properties");
        NeoServerWithEmbeddedWebServer neoServer = new NeoServerWithEmbeddedWebServer(this, new AddressResolver(),
                null, configFile, virtualHostWebServer, getServerModules());

        server.put(serverName, neoServer);

        //TODO refactor NeoServerWithEmbeddedWebServer.start()
        invokePrivate(neoServer, neoServer.getClass(), "validateConfiguration");

        // set custom locations
        neoServer.getConfigurator().configuration().setProperty(Configurator.DATABASE_LOCATION_PROPERTY_KEY, "data/graph.db/" + serverName);
        neoServer.getConfigurator().configuration().setProperty("org.neo4j.server.webadmin.rrdb.location", "data/" + serverName + "_rrd");

        invokePrivate(neoServer, neoServer.getClass(), "startDatabase");
        invokePrivate(neoServer, neoServer.getClass(), "startExtensionInitialization");
        invokePrivate(neoServer, neoServer.getClass(), "startModules");
        invokePrivate(neoServer, neoServer.getClass(), "startWebServer");
    }


    private void unloadVirtualServer(final String serverName) {
        server.remove(serverName).stop();
    }


    private void storeConfig() {
        try {
            hosts.save(configFile);
        } catch (ConfigurationException e) {
            throw new RuntimeException(e);
        }
    }

}
