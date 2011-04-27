package org.neo4j.server;

import static org.neo4j.server.Util.invokePrivate;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.SessionManager;
import org.mortbay.jetty.servlet.HashSessionManager;
import org.neo4j.helpers.collection.IteratorUtil;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.web.Jetty6VirtualHostWebServer;

/**
 * @author tbaum
 * @since 14.04.11 13:04
 */
public class HostedBootstrapper extends NeoServerBootstrapper {

    private static Logger log = Logger.getLogger(Bootstrapper.class);

    private final Map<String, NeoServer> server = new HashMap<String, NeoServer>();
    private final File configFile = new File("conf/hosts.properties");

    private final Thread shutdownHook = new Thread() {
        @Override public void run() {
            shutdown();
        }
    };

    private Server jetty;
    private PropertiesConfiguration hosts;
    private AuthenticationService authenticationService;
    private final SessionManager sm = new HashSessionManager();


    @Override public Integer start(String[] args) {
        try {
            hosts = new PropertiesConfiguration(configFile);
            authenticationService = new AuthenticationService(hosts);

            jetty = startJetty();

            HostedAdminContext.install(this);
            SimpleSecurityContext.install(this);

            startAllHosts(hosts);

            Runtime.getRuntime().addShutdownHook(shutdownHook);

            return Bootstrapper.OK;
        } catch (Exception e) {
            return Bootstrapper.WEB_SERVER_STARTUP_ERROR_CODE;
        }
    }

    public Server getJetty() {
        return jetty;
    }

    private void shutdown() {
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
        server.clear();
        jetty = null;
    }

    private void startAllHosts(final Configuration hosts) {
        for ( String name : IteratorUtil.asIterable( (Iterator<String>) hosts.getKeys() ) )
        {
            log.info("deploying host " + name);
            loadVirtualServer(name);
        }
        restartJetty();
    }

    private Server startJetty() throws Exception {
        final Server jetty = new Server(7474);  //TODO read from configuration?
        jetty.setStopAtShutdown(true);
        jetty.start();
        return jetty;
    }

    public void restartJetty() {
        final Handler handler = jetty.getHandler();
        try {
            handler.stop();
            handler.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void createVirtualServer(final String serverName, final String cred) {
        log.info("create host " + serverName);
        hosts.addProperty(serverName, cred);
        storeConfig();
        loadVirtualServer(serverName);
        restartJetty();
    }

    public void removeVirtualServer(final String serverName) {
        log.info("remove host " + serverName);
        hosts.clearProperty(serverName);
        storeConfig();
        unloadVirtualServer(serverName);
        restartJetty();
    }

    private void loadVirtualServer(final String serverName) {
        final Jetty6VirtualHostWebServer virtualHostWebServer = new Jetty6VirtualHostWebServer( sm, jetty, serverName );

        final File configFile = new File("conf/neo4j-server.properties");
        final NeoServerWithEmbeddedWebServer neoServer = new NeoServerWithEmbeddedWebServer(this,
                new AddressResolver(), null, configFile, virtualHostWebServer, getServerModules());

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

    public AuthenticationService getAuthenticationService() {
        return authenticationService;
    }
}
