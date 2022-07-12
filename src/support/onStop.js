import { mapAsync } from './mapAsync.js';

const listeners = new Map();
const kListener = Symbol('kListener');

const onStop = async listener => {
  listeners.set(kListener, listener);
};

const fireListener = async () => {
  return Promise.all(mapAsync(listeners.values(), fn => fn()));
};

const handler = code => {
  return async signal => {
    console.info(`onStop: ${code}`);
    console.info('onStop:', signal);

    await fireListener();

    listeners.clear();

    process.exit(0);
  };
};

process.on('SIGINT', handler('SIGINT'));
process.on('SIGTERM', handler('SIGTERM'));

export { onStop };
