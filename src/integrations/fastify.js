import { makeExecutableSchema } from '@graphql-tools/schema';
import fastify from 'fastify';
import mercurius from 'mercurius';

import { buildResolvers } from './../server/resolvers.js';
import { buildTypeDefs } from './../server/typeDefs.js';

const buildServer = async () => {
  const app = fastify({ logger: true });

  const [typeDefs, resolvers] = await Promise.all([
    buildTypeDefs(),
    buildResolvers(),
  ]);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  app.register(mercurius, {
    schema,
    jit: 1,
    graphiql: true,
    context: () => {
      return {};
    },
  });

  return {
    listen: async port => {
      const url = await app.listen({ port });
      return { url };
    },
  };
};

export { buildServer };
