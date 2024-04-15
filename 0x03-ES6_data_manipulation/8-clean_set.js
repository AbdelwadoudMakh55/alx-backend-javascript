export default function clenSet(set, startString) {
  const arr = [];
  set.forEach((word) => {
    if (word.startsWith(startString) && startString.length > 0) {
      arr.push(word.replace(startString, ''));
    }
  });
  return arr.join('-');
}
