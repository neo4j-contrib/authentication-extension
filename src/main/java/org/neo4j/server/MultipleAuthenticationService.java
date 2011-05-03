package org.neo4j.server;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;

import java.io.File;

/**
 * @author tbaum
 * @since 16.04.11 15:38
 */
public class MultipleAuthenticationService implements AuthenticationService {

    private final PropertiesConfiguration configuration;
    private final File configFile;



    MultipleAuthenticationService(File configFile) {
        this.configFile = configFile;
        try {
            this.configuration = new PropertiesConfiguration(configFile);
        } catch (ConfigurationException e) {
            throw new RuntimeException(e);
        }
    }

    public void setPermissionForUser(String user, boolean read, boolean write) {
        if (read || write) {
            configuration.setProperty(user, (read ? "r" : "") + (write ? "w" : ""));
        } else {
            configuration.clearProperty(user);
        }
        try {
            configuration.save(configFile);
        } catch (ConfigurationException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean hasAccess(String method, final byte[] credentials) {
        final String cred = new String(credentials);
        final String rights = configuration.getString(cred, "");

        return isVerb(method, "PUT", "POST", "DELETE") && rights.contains("w") ||
                isVerb(method, "GET") && rights.contains("r");
    }

    private boolean isVerb(String method, final String... verbs) {
        for (String verb : verbs) {
            if (verb.equalsIgnoreCase(method)) {
                return true;
            }
        }
        return false;
    }
}
