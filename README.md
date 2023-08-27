<h1 align=center>
    Typegraphql-Prisma Demo
</h1>

<p align=center>
    <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
    style="margin-right: 20px">
    <img src="https://www.vectorlogo.zone/logos/docker/docker-tile.svg" width=60 style="margin-right: 20px">
    <img src="https://cdn.worldvectorlogo.com/logos/prisma-4.svg" width=48 style="margin-right: 20px">
    <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width=55 style="margin-right: 20px">
    <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" width=55>
</p>

<h2 align=center>
<code>Description
</code>
</h2> 

**_TypeGraphQL_** provides an integration with **_Prisma_** by the `typegraphql-prisma` package. It generates the type classes and CRUD resolvers based on the Prisma schema, so we can execute complex queries or mutations that corresponds to the Prisma actions, without having to write any code for that. This is a basic `To-do` application and you can manage your database with **_Pg-admin_** on a port of your choice.

<h2 align=center>
<code>Requirements
</code>
</h2>  
- Docker & Docker Compose

<h2 align=center>
<code>Running
</code></h2>  

First you must create a `.env` file following the example this project provides. Then all you have to do is to run the following command:

```sh
docker-compose up -d
```

