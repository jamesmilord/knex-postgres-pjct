# Simple crud api using Knex and PostgreSQL

## Project setup

you will need to have knex installed globally

```
npm install knex -g
```

This package will also be part of your local dependencies

you have the choice of running the db locally on your operating system or within a docker-container

### Running Postgres

Running locally on the operating system by going to the official site of [Postgresql](https://www.postgresql.org/download/)
pick operating system and follow prompt. :+1: easy

Running within docker you will need to perform a few command

```
docker run --name <db_name>  -p 5432:5432 -e POSTGRES_PASSWORD=<password> -d postgres
```

pay attention :eyes: to the -p flag this is how you will expose the container to the outside world from right to left meaning 5432 on the right is the port that the db is running inside of the container and to the left 5432 is the one you map to the ouside.

type

```
docker ps
```

command to make sure the container is running and is exposed to port 5432

then type

```
 docker exec -it <container_name>
```

this will let you get inside of the container and there you will run the following command

```
psql -U postgres
```

which will take you to the postgres shell

then run

```
CREATE USER new_username;
ALTER USER new_username SUPERUSER CREATEDB;
```

change the username to the name of your machine as you will get a not found role error

to verify

```
postgres=# \du
                         List of roles
 Role name |                   Attributes                   | Member of
-----------+------------------------------------------------+-----------
new_username     | Superuser, Create DB                           | {}
postgres         | Superuser, Create role, Create DB, Replication | {}
root             | Superuser, Create role, Create DB              | {}

postgres=#
```

then you should create a database which you will use in your knex setup

```
CREATE DATABASE <database_name>
```

then the docker setup should be complete :raised_hands:

## Knex Setup

after genrating the express server

since we are using knex you will need to run a few knex command

first one which is

```
knex init
```

which will give you a knexfile.js configuration file to connect to your db

next run

```
migrate:make <migration file>
```

this will create a migrations folder with a file that you will put a schema for you db and also the logic of dropping your db

next run

```
knex migrate:latest
```

which will apply the schema to your db

then run

```
knex seed:make <seedfile>
```

which will create a seed file in a seeds folder, you may put the data you wish to use to seed the db

then finally run

```
knex seed:run
```

this will insert your seed to the db :tada:
