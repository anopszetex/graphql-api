import { startServer } from './server/index.js';

startServer()
  .then(server => {
    return server.listen(3718);
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
