package org.neo4j.server;

import org.mortbay.jetty.Server;

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

    public static void setPrivateField(final Object target, final Class targetClass, final String name, final Server value) {
        try {
            Field _jetty = targetClass.getDeclaredField(name);
            _jetty.setAccessible(true);
            _jetty.set(target, value);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
