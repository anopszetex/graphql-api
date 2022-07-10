import { makeExecutableSchema } from '@graphql-tools/schema';
import fastify from 'fastify';
import mercurius from 'mercurius';

import { buildResolvers } from './resolvers.js';
import { buildTypeDefs } from './typeDefs.js';

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
  });

  return app;
};

export { buildServer };
