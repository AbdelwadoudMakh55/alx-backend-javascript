export default function clenSet(set, startString) {
  const arr = [];
  if (startString.length === 0) {
    return '';
  }
  set.forEach((word) => {
    if (word.startsWith(startString) && startString !== word) {
      arr.push(word.slice(startString.length));
    }
  });
  return arr.join('-');
}
