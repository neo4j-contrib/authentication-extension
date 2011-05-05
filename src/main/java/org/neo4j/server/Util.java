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
package org.neo4j.server;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * @author tbaum
 * @since 15.04.11 01:34
 */
public class Util {
    public static void invokePrivate(Object target, final Class targetClass, final String name) {
        try {
            Method method = targetClass.getDeclaredMethod(name);
            method.setAccessible(true);
            method.invoke(target);
        } catch (InvocationTargetException e) {
            throw new RuntimeException(e.getCause());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static <T> T getPrivateField(Object server, final String name) {
        try {
            Field field = server.getClass().getDeclaredField(name);
            field.setAccessible(true);
            return (T) field.get(server);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void setPrivateField(final Object target, final Class targetClass, final String name, final Object value) {
        try {
            Field field = targetClass.getDeclaredField(name);
            field.setAccessible(true);
            field.set(target, value);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
