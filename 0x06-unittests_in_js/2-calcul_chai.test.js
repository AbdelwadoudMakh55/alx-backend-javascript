const calculateNumber = require('./2-calcul_chai')
const expect = require('chai').expect;

describe('SUM', () => {
  it('Add 2 numbers', () => {
    expect(calculateNumber('SUM', 4.1, -5.2)).to.equal(-1);
  });
  it('Add 2 numbers', () => {
    expect(calculateNumber('SUM', 7.6, -5)).to.equal(3);  
  });
  it('Add 2 numbers', () => {
    expect(calculateNumber('SUM', 4.2, 5.2)).to.equal(9);
  });
});
describe('SUBTRACT', () => {
  it('Subtract b from a', () => {
    expect(calculateNumber('SUBTRACT', 4.1, -5.2)).to.equal(9);
  });
  it('Subtract b from a', () => {
    expect(calculateNumber('SUBTRACT', 7.6, -5)).to.equal(13);  
  });
  it('Subtract b from a', () => {
    expect(calculateNumber('SUBTRACT', 10.5, 7.3)).to.equal(4);
  });
});
describe('DIVIDE', () => {
  it('Divide a by b', () => {
    expect(calculateNumber('DIVIDE', 4.1, 0.1)).to.equal('Error');
  });
  it('Divide a by b', () => {
    expect(calculateNumber('DIVIDE', 7.6, 3.6)).to.equal(2);  
  });
  it('Divide a by b', () => {
    expect(calculateNumber('DIVIDE', 10.4, 4.6)).to.equal(2);
  });
});
