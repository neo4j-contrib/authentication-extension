/**
 * Copyright (c) 2002-2013 "Neo Technology,"
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
package org.neo4j.server.extension.auth;

import org.neo4j.graphdb.PropertyContainer;
import org.neo4j.graphdb.Transaction;
import org.neo4j.kernel.GraphDatabaseAPI;
import org.neo4j.kernel.impl.core.NodeManager;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author tbaum
 * @since 16.04.11 15:38
 */
public class MultipleAuthenticationService implements AuthenticationService {

    private static final String CONFIG_PREFIX = MultipleAuthenticationService.class.getPackage().getName();
    private static final Pattern USER_PATTERN = Pattern.compile(CONFIG_PREFIX + "\\.user\\.(.+)");
    private final GraphDatabaseAPI graph;

    public MultipleAuthenticationService(GraphDatabaseAPI graph) {
        this.graph = graph;
    }

    @Override public boolean hasAccess(String method, final byte[] credentials) {
        final String cred = new String(credentials);
        final String rights = getCredentials(cred);

        return isVerb(method, "PUT", "POST", "DELETE") && rights.contains("W") ||
                isVerb(method, "GET") && rights.contains("R");
    }

    private String getCredentials(String cred) {
        PropertyContainer properties = getGraphProperties();
        return (String) properties.getProperty(getUserKey(cred), "");
    }

    private PropertyContainer getGraphProperties() {
        NodeManager nodeManager = graph.getDependencyResolver().resolveDependency(NodeManager.class);
        return nodeManager.getGraphProperties();
    }

    private String getUserKey(String cred) {
        return CONFIG_PREFIX + ".user." + cred;
    }

    public Map<String, Permission> getUsers() {
        final Map<String, Permission> result = new HashMap<String, Permission>();

        PropertyContainer properties = getGraphProperties();
        for (String key : properties.getPropertyKeys()) {
            Matcher matcher = USER_PATTERN.matcher(key);
            if (matcher.matches()) {
                String value = (String) properties.getProperty(key);
                result.put(matcher.group(1), Permission.valueOf(value));
            }
        }
        return result;
    }

    private boolean isVerb(String method, final String... verbs) {
        for (String verb : verbs) {
            if (verb.equalsIgnoreCase(method)) {
                return true;
            }
        }
        return false;
    }

    public void setPermissionForUser(String user, Permission permission) {
        Transaction transaction = graph.beginTx();
        try {
            PropertyContainer properties = getGraphProperties();
            String key = getUserKey(user);
            if (permission == Permission.NONE) {
                properties.removeProperty(key);
            } else {
                properties.setProperty(key, permission.name());
            }
            transaction.success();
        } catch (Exception e) {
            transaction.failure();
        } finally {
            transaction.finish();
        }
    }

    public enum Permission {
        NONE, RO, RW
    }
}
