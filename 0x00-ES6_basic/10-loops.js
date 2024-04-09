export default function appendToEachArrayValue(array, appendString) {
  for (const i of array.keys()) {
    const val = array[i];
    array[i] = appendString + val;
  }

  return array;
}
