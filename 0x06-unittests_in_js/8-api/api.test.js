const { expect } = require('chai');
const request = require('request');

describe('Index page test', () => {
  it('API test', () => {
    request('localhost:7865', (err, data) => {
      if (err) {
        return;
      }
      expect(data.statusCode).to.equal(200);
    });
  });
  it('API test 1', () => {
    request('localhost:7865', (err, data) => {
      if (err) {
        return;
      }
      expect(data).to.equal('Welcome to the payment system');
    });
  });
});