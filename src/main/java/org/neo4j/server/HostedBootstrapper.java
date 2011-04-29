package org.neo4j.server;

import org.mortbay.jetty.Handler;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.SessionManager;
import org.mortbay.jetty.servlet.HashSessionManager;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.PropertyFileConfigurator;
import org.neo4j.server.logging.Logger;
import org.neo4j.server.web.Jetty6PatchedWebServer;

import java.io.File;

import static org.neo4j.server.Util.invokePrivate;

/**
 * @author tbaum
 * @since 14.04.11 13:04
 */
public class HostedBootstrapper extends NeoServerBootstrapper {

    private static Logger log = Logger.getLogger(Bootstrapper.class);

    private NeoServerWithEmbeddedWebServer neoServer;

    private final Thread shutdownHook = new Thread() {
        @Override public void run() {
            shutdown();
        }
    };

    private Server jetty;
    private AuthenticationService authenticationService;
    private final SessionManager sm = new HashSessionManager();
    private PropertyFileConfigurator configurator = new PropertyFileConfigurator(getConfigFile());

    @Override public Integer start(String[] args) {
        try {
            jetty = startJetty();
            String a = configurator.configuration().getString("org.neo4j.server.credentials");
            if (a != null) {
                authenticationService = new AuthenticationService(a);
                SimpleSecurityContext.install(this);
            }

            loadVirtualServer();
            restartJetty();

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
        neoServer.stop();
        try {
            jetty.stop();
            jetty.join();
            jetty.setStopAtShutdown(false);
        } catch (Exception ignored) {
        }
        neoServer = null;
        jetty = null;
    }

    private Server startJetty() throws Exception {
        final Server jetty = new Server(configurator.configuration().getInt(Configurator.WEBSERVER_PORT_PROPERTY_KEY,
                Configurator.DEFAULT_WEBSERVER_PORT));
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

    public AuthenticationService getAuthenticationService() {
        return authenticationService;
    }
}
