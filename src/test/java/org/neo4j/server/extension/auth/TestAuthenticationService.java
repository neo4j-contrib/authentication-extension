package org.neo4j.server.extension.auth;

import org.junit.Before;
import org.junit.Test;
import org.neo4j.graphdb.PropertyContainer;
import org.neo4j.graphdb.Transaction;
import org.neo4j.test.ImpermanentGraphDatabase;

import static org.junit.Assert.assertEquals;
import static org.neo4j.helpers.collection.MapUtil.genericMap;
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
        service = new MultipleAuthenticationService(graphDatabase);
    }

    @Test public void testUserAddRemove() {
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
