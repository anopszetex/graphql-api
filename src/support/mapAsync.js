export function* mapAsync(list, fn) {
  let counter = 0;

  for (const iterator of list) {
    yield fn(iterator, counter);
    counter++;
  }
}
