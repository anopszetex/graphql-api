import { loadFiles } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import path from 'node:path';

import { __dirname } from '../tools/filename.js';

const buildResolvers = async () => {
  const resolversArray = await loadFiles(
    path.join(__dirname(import.meta.url), '../resolvers/**/index.js')
  );

  return mergeResolvers(resolversArray);
};

export { buildResolvers };
