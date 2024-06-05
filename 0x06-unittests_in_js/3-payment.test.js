const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('Test payment', () => {
    it('Spying', () => {
      const spy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      expect(spy.returned(120)).to.equal(true);
    });
});
