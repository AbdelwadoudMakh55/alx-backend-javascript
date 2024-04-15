export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  let result = '';
  set.forEach((word) => {
    if (typeof word === 'string' && word.startsWith(startString)) {
      result += `${word.slice(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
