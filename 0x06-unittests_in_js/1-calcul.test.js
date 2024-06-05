const calculateNumber = require('./1-calcul')
const assert = require('assert');

describe('SUM', () => {
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber('SUM', 4.1, -5.2), -1);
  });
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber('SUM', 7.6, -5), 3);  
  });
  it('Add 2 numbers', () => {
    assert.equal(calculateNumber('SUM', 4.2, 5.2), 9);
  });
});
describe('SUBTRACT', () => {
  it('Substract b from a', () => {
    assert.equal(calculateNumber('SUBSTRACT', 4.1, -5.2), 9);
  });
  it('Substract b from a', () => {
    assert.equal(calculateNumber('SUBSTRACT', 7.6, -5), 13);  
  });
  it('Substract b from a', () => {
    assert.equal(calculateNumber('SUBSTRACT', 10.5, 7.3), 4);
  });
  it('Substract b from a', () => {
    assert.equal(calculateNumber('SUBSTRACT', 7.3, 10.5), -4);
  });
});
describe('DIVIDE', () => {
  it('Divide a by b', () => {
    assert.equal(calculateNumber('DIVIDE', 4.1, 0.1), 'Error');
  });
  it('Divide a by b', () => {
    assert.equal(calculateNumber('DIVIDE', 7.6, 3.6), 2);  
  });
  it('Divide a by b', () => {
    assert.equal(calculateNumber('DIVIDE', 10.4, 4.6), 2);
  });
  it('Divide a by b', () => {
    assert.equal(calculateNumber('DIVIDE', 1.9, 4.6), 0.4);
  });
});
