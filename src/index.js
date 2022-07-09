import { startServer } from './server/index.js';

(async () => {
  const server = await startServer();

  const { url } = await server.listen(3718);

  console.log(`🚀 Server ready at ${url}`);
})();
