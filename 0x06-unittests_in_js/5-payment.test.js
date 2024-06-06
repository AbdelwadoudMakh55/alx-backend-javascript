const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('Test payment', () => {
  let spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    sinon.restore();
  });
  it('Hook 1', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.equal(true);
    sinon.assert.calledOnce(spy);
  });
  it('Hook 2', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.equal(true);
    sinon.assert.calledOnce(spy);
  });
});
