const { expect } = require('chai');
const request = require('request');

describe('Index page test', () => {
  it('API test', (done) => {
    setTimeout(() => {
      request('http://localhost:7865', (err, data) => {
        if (err) {
          return;
        }
        expect(data.statusCode).to.equal(200);
        expect(data.body).to.equal('Welcome to the payment system');
        done();
      });
    }, 500);
  });
});
