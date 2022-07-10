import { makeExecutableSchema } from '@graphql-tools/schema';
import fastify from 'fastify';
import mercurius from 'mercurius';

import { buildResolvers } from './resolvers.js';
import { buildTypeDefs } from './typeDefs.js';

// import resolvers from '../resolvers/index.js';
// import schema from '../schema/user.graphql';

// const app = fastify();

/* app.register(mercurius, {
  schema,
  resolvers,
  jit: 1,
}); */
// app.get('/', async function (req, reply) {
// const query = '{ add(x: 2, y: 2) }';
// app.log.info('ihu');
// return reply.graphql('{ add(x: 2, y: 2) }');
// });

/* const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
  `;
  
  const resolvers = {
    Query: {
      add: async (_, args) => {
        console.log('ok');
        return args.x + args.y;
      },
    },
  }; */

const app = fastify({ logger: true });

const start = async () => {
  const [typeDefs, resolvers] = await Promise.all([
    buildTypeDefs(),
    buildResolvers(),
  ]);

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  // console.log(schema);
  // console.log(resolvers);

  app.register(mercurius, {
    schema,
    // resolvers,
    jit: 1,
  });

  await app.listen({ port: 4500 });
  console.log(`🚀 Server ready at http://localhost:4500/graphql`);
  // await app.ready();
  // const res = await app.graphql('{ add(x: 2, y: 2) }');
  // console.log(res);
  // const query = '{ add(x: 2, y: 2) }';
};

start();
