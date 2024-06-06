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
  it('Cart page', (done) => {
    setTimeout(() => {
      request('http://localhost:7865/cart/17', (err, data) => {
        if (err) {
          return;
        }
        expect(data.statusCode).to.equal(200);
      });
    }, 500);
    setTimeout(() => {
      request('http://localhost:7865/cart/aa', (err, data) => {
        if (err) {
          expect(data.statusCode).to.equal(404);
          return;
        }
        done();
      });
    }, 500);
  });
});
