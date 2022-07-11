import { buildServer } from './../integrations/fastify.js';

const fastifyAdapter = async () => {
  return buildServer();
};

export { fastifyAdapter };
