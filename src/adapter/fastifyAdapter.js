import { buildServer } from './../integrations/fastify.js';

export async function startServer() {
  const app = await buildServer();

  return {
    listen: async port => {
      app.listen(port);
      return Promise.resolve({
        url: app.server.address().host,
      });
    },
  };
}
