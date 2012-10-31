# Basic Auth-Filter-Extension for Neo4j-Server

Just put the jar-file into `plugins` and add the following lines to the `conf/neo4j-server.properties` file.

    org.neo4j.server.credentials=username:password
    org.neo4j.server.thirdparty_jaxrs_classes=org.neo4j.server.extension.auth=/auth

Manage the credentials by sending requests to the `http://server:port/auth` endpoint.

## List existing users

    GET http://server:port/auth/list

    returns data in the form {"user:pass":"RW", "user2:pass2":"RO"}
    
## Adding users with form-param: user=username:password

    POST http://server:port/auth/add-user-ro
    POST http://server:port/auth/add-user-rw
  
## Removing users with form-param: user=username:password

    POST http://server:port/auth/remove-user  
