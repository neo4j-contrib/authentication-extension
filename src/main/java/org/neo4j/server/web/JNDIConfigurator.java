package org.neo4j.server.web;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.MapConfiguration;
import org.apache.commons.configuration.SystemConfiguration;
import org.neo4j.server.configuration.Configurator;
import org.neo4j.server.configuration.ThirdPartyJaxRsPackage;
import org.neo4j.server.logging.Logger;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * @author tbaum
 * @since 06.02.11
 */
public class JNDIConfigurator implements Configurator {
    public static final Logger LOG = Logger.getLogger(JNDIConfigurator.class);

    private static final String PREFIX = "java:comp/env/";
    private static final String[] loadKeys = {
            ConfigUtils.NEO_SERVER_AUTH_USER_KEY,
            ConfigUtils.NEO_SERVER_AUTH_PASS_KEY,
            Configurator.DATABASE_LOCATION_PROPERTY_KEY,
            "org.neo4j.server.webadmin.rrdb.location",
    };

    private final Configuration config = new MapConfiguration(new HashMap());


    public JNDIConfigurator() {
        try {
            InitialContext initCtx = new InitialContext();
            for (String key : loadKeys) {
                loadConfig(initCtx, key);
            }
        } catch (NamingException e) {
            LOG.error(e.getMessage());
            throw new RuntimeException("unable to lookup initialContext " + e.getMessage(), e);
        }
    }

    private void loadConfig(InitialContext initCtx, String key) {
        final String lookup;
        try {
            lookup = (String) initCtx.lookup(PREFIX + key);
        } catch (NamingException e) {
            LOG.warn("missing key %s", key);
            return;
        }

        LOG.warn("loading key %s -> %s ", key, lookup);
        config.addProperty(key, lookup);
    }

    @Override public Configuration configuration() {
        return config;
    }

    @Override public Map<String, String> getDatabaseTuningProperties() {
        //TODO
        return new HashMap<String, String>();
    }

    @Override public Set<ThirdPartyJaxRsPackage> getThirdpartyJaxRsClasses() {
        //TODO
        return new HashSet<ThirdPartyJaxRsPackage>();
    }
}
