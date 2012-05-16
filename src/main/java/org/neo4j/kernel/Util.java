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
package org.neo4j.kernel;

import org.neo4j.kernel.impl.core.NodeManager;
import org.neo4j.tooling.wrap.WrappedGraphDatabase;

import java.lang.reflect.Field;

public class Util {

    public static NodeManager getNodeManager(AbstractGraphDatabase database) {
        try {
            if (database instanceof WrappedGraphDatabase) {
                Field graphdb = WrappedGraphDatabase.class.getDeclaredField("graphdb");
                graphdb.setAccessible(true);
                database = (AbstractGraphDatabase) graphdb.get(database);
            }


            Field graphDbImpl = EmbeddedGraphDatabase.class.getDeclaredField("graphDbImpl");
            graphDbImpl.setAccessible(true);

            Object embeddedGraphDatabase = graphDbImpl.get(database);

            Field nodeManager = EmbeddedGraphDbImpl.class.getDeclaredField("nodeManager");
            nodeManager.setAccessible(true);
            return (NodeManager) nodeManager.get(embeddedGraphDatabase);
        } catch (NoSuchFieldException e) {
            throw new RuntimeException(e);
        } catch (IllegalAccessException e) {
            throw new RuntimeException(e);
        }
    }
}
