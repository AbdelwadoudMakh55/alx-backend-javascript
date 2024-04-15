export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  let result = '';
  set.forEach((word) => {
    if (word.startsWith(startString)) {
      result += `${word.slice(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
