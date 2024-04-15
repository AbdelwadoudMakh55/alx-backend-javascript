export default function hasValuesFromArray(set, array) {
  for (const n of array) {
    if (!set.has(n)) {
      return false;
    }
  }
  return true;
}
