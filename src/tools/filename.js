import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = filename => {
  return path.dirname(fileURLToPath(filename));
};

export { __dirname };
