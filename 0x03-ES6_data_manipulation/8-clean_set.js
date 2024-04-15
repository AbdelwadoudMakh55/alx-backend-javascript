export default function clenSet(set, startString) {
  const arr = [];
  if (startString.length === 0) {
    return '';
  }
  set.forEach((word) => {
    if (word.startsWith(startString)) {
      arr.push(word.replace(startString, ''));
    }
  });
  return arr.join('-');
}
