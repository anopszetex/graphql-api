import { buildServer } from './../integrations/apollo.js';

const apolloAdapter = async () => {
  return buildServer();
};

export { apolloAdapter };
