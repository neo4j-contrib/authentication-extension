package org.neo4j.server;

/**
 * @author tbaum
 * @since 16.04.11 15:38
 */
public class AuthenticationService {

    private final String cred;

    AuthenticationService(final String cred) {
        this.cred = cred;
    }


    boolean isValid(final byte[] credentials) {
        return new String(credentials).equals(cred);
    }
}
