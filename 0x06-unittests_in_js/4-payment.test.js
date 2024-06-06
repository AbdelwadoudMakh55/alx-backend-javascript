const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');


describe('Test payment', () => {
    it('Stub ', () => {
      const stub = sinon.stub(Utils, 'calculateNumber');
      const spy = sinon.spy(console, 'log');
      stub.returns(10);
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnce(stub);
      expect(spy.alwaysCalledWith('The total is: 10')).to.equal(true);
    });
});
