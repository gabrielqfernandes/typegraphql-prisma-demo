require('dotenv').config();
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';
import { ApolloServer } from 'apollo-server';

import prisma from './prisma';

const main = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
    context: () => ({
      prisma,
    }),
  });

  server
    .listen(process.env.PORT || 4000)
    .then(({ url }) =>
      console.log(`🚀 Server awaiting for incoming requests on ${url}`)
    );
};

main();
