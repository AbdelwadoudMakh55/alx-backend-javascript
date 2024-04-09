/*eslint-disable*/
export default function appendToEachArrayValue(array, appendString) {
  for (const [i, val] of array.entries()) {
    array[i] = appendString + val;
  }

  return array;
}
