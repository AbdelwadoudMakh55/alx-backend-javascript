const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('API test', () => {
    request('localhost:7865', (err, data) => {
      if (err) {
        return;
      }
      expect(data.statusCode).to.equal(200);
      expect(data).to.equal('Welcome to the payment system');
    });
  });
});