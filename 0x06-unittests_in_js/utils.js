const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM')
      return Math.round(a) + Math.round(b);
    else if (type === 'SUBTRACT')
      return Math.round(a) - Math.round(b);
    else if (type == 'DIVIDE') {
      round_b = Math.round(b);
      if (round_b === 0) {
        return 'Error';
      }
      return Math.round(a) / round_b;
    }
  } 
}
module.exports = Utils;
