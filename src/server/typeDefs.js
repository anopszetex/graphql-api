import { loadFiles } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'node:path';

import { __dirname } from '../support/dirname.js';

const buildTypeDefs = async () => {
  const typesArray = await loadFiles(
    path.join(__dirname(import.meta.url), '../schema'),
    {
      extensions: ['graphql'],
    }
  );

  return mergeTypeDefs(typesArray);
};

export { buildTypeDefs };
