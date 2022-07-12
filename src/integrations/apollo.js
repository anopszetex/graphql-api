import { ApolloServer } from 'apollo-server';

import { buildResolvers } from './../server/resolvers.js';
import { buildTypeDefs } from './../server/typeDefs.js';

const buildServer = async () => {
  const [typeDefs, resolvers] = await Promise.all([
    buildTypeDefs(),
    buildResolvers(),
  ]);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });

  return {
    listen: async port => {
      await server.listen({ port });

      return { url: `http://localhost:${port}/graphql` };
    },
    stop: async () => {
      return server.stop();
    },
  };
};

export { buildServer };
