import { apolloAdapter } from './../adapter/apolloAdapter.js';
import { fastifyAdapter } from './../adapter/fastifyAdapter.js';

const servers = [apolloAdapter, fastifyAdapter];

const startServer = servers[1];

export { startServer };
