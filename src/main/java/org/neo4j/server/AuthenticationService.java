package org.neo4j.server;

import org.apache.commons.configuration.Configuration;

/**
 * @author tbaum
 * @since 16.04.11 15:38
 */
public class AuthenticationService {

    private final Configuration hosts;

    AuthenticationService(final Configuration hosts) {
        this.hosts = hosts;
    }

    boolean isConfigured(final String serverName) {
        return hosts.getString(serverName) != null;
    }

    boolean isValid(final String serverName, final byte[] credentials) {
        return new String(credentials).equals(hosts.getString(serverName));
    }
}
