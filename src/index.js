import { startServer } from './server/index.js';
import { onStop } from './support/onStop.js';

startServer()
  .then(server => {
    onStop(async () => {
      return server.stop();
    });

    return server.listen(3718);
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
