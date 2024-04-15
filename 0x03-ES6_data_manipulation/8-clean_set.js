export default function clenSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  let result = '';
  set.forEach((word) => {
    if (word.startsWith(startString) && startString !== word) {
      result += `${word.slice(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
