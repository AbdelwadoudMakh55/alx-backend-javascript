export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const load = weakMap.get(endpoint) + 1 || 1;
  if (load >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, load);
  }
}
