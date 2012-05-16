/**
 * Copyright (c) 2002-2011 "Neo Technology,"
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

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.neo4j.graphdb.PropertyContainer;
import org.neo4j.graphdb.Transaction;
import org.neo4j.test.ImpermanentGraphDatabase;

import static org.junit.Assert.assertEquals;
import static org.neo4j.helpers.collection.MapUtil.genericMap;
import static org.neo4j.kernel.Util.getNodeManager;
import static org.neo4j.server.extension.auth.MultipleAuthenticationService.Permission.*;


/**
 * @author tbaum
 * @since 24.11.11
 */
public class TestAuthenticationService {

    private MultipleAuthenticationService service;
    private ImpermanentGraphDatabase graphDatabase;

    @Before public void setup() {
        graphDatabase = new ImpermanentGraphDatabase();
        service = new MultipleAuthenticationService(graphDatabase, getNodeManager(graphDatabase),
                graphDatabase.getKernelData());
    }

    @Test @Ignore public void testUserAddRemove() {
        service.setPermissionForUser("user1", RO);

        PropertyContainer properties = graphDatabase.getKernelData().properties();
        Transaction transaction = graphDatabase.beginTx();
        properties.setProperty("any other property", "should be ignored");
        transaction.success();
        transaction.finish();

        assertEquals(genericMap("user1", RO), service.getUsers());

        service.setPermissionForUser("user2", RW);
        assertEquals(genericMap("user1", RO, "user2", RW), service.getUsers());

        service.setPermissionForUser("user2", NONE);
        assertEquals(genericMap("user1", RO), service.getUsers());
    }
}
