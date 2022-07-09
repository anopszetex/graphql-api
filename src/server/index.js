import { ApolloServer, gql } from 'apollo-server';
import { setTimeout } from 'timers/promises';

const typeDefs = gql`
  type Query {
    add(x: Int, y: Int): Int
  }
`;

const resolvers = {
  Query: {
    add: async (_, args) => {
      const { x, y } = args;

      await setTimeout(50);

      return x + y;
    },
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });

  return server;
};

export { startServer };
