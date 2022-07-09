import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: { hello: () => 'Hello world!' },
};

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  return server;
};

export { startServer };
