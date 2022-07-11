import { ApolloServer } from 'apollo-server';

import { buildResolvers } from './../server/resolvers.js';
import { buildTypeDefs } from './../server/typeDefs.js';

const buildServer = async () => {
  const [typeDefs, resolvers] = await Promise.all([
    buildTypeDefs(),
    buildResolvers(),
  ]);

  return new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });
};

export { buildServer };
