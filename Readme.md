# Basic Auth-Filter-Extension for Neo4j-Server

Just put the jar-file into `plugins` and add the following lines to the `conf/neo4j-server.properties` file. 
The username:password combination are the admin credentials, please change as appropriate.

    org.neo4j.server.credentials=username:password
    org.neo4j.server.thirdparty_jaxrs_classes=org.neo4j.server.extension.auth=/auth

Manage the credentials by sending POST requests to the `http://server:port/auth` endpoint.

## List existing users

    GET http://server:port/auth/list

    returns data in the form {"user:pass":"RW", "user2:pass2":"RO"}

    curl --user username:password http://localhost:7474/auth/list
    
## Adding users with form-param: user=username:password

    POST http://server:port/auth/add-user-ro
    POST http://server:port/auth/add-user-rw

    returns "OK" on success
  
    curl --user username:password -d "user=username1:password1" http://localhost:7474/auth/add-user-rw
    curl --user username:password -d "user=username2:password2" http://localhost:7474/auth/add-user-ro

## Removing users with form-param: user=username:password

    POST http://server:port/auth/remove-user  

    curl --user username:password -d "user=username2:password2" http://localhost:7474/auth/remove-user

    returns "OK" on success

## Download of precompiled jars

* [authentication-extension-1.9-SNAPSHOT-1.0-SNAPSHOT.jar](http://dist.neo4j.org.s3.amazonaws.com/authentication-extension/authentication-extension-1.9-SNAPSHOT-1.0-SNAPSHOT.jar)
* [authentication-extension-1.9-SNAPSHOT-1.0-SNAPSHOT-server-plugin.zip](http://dist.neo4j.org.s3.amazonaws.com/authentication-extension/authentication-extension-1.9-SNAPSHOT-1.0-SNAPSHOT-server-plugin.zip)
* [authentication-extension/authentication-extension-2.0.0-1.0-SNAPSHOT.jar](http://dist.neo4j.org/authentication-extension/authentication-extension-2.0.0-1.0-SNAPSHOT.jar)
