package org.neo4j.server;

/**
 * @author tbaum
 * @since 03.05.11 20:02
 */
public interface AuthenticationService {
    boolean hasAccess(String method, byte[] credentials);
}
