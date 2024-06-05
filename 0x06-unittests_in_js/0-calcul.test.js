const calculateNumber = require('./0-calcul')
const assert = require('assert');

describe('calculateNumber', () => {
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber(4.1, -5.2), -1);
  });
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber(7.6, -5), 3);  
  });
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber(4.2, 5.2), 9);
  });
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber(-3.7, 0), -4);
  });
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber(10.8, 7.9), 19);
  });
});
