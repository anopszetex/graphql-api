import { ApolloServer } from 'apollo-server';

import { buildResolvers } from './resolvers.js';
import { buildTypeDefs } from './typeDefs.js';

const startServer = async () => {
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

export { startServer };
