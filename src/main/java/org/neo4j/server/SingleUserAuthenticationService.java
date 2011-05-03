package org.neo4j.server;

/**
 * @author tbaum
 * @since 16.04.11 15:38
 */
public class SingleUserAuthenticationService implements AuthenticationService {

    private final String credentials;

    public SingleUserAuthenticationService(final String credentials) {
        this.credentials = credentials;
    }

    public boolean hasAccess(String method, final byte[] credentials) {
        return this.credentials.equals(new String(credentials));
    }
}
