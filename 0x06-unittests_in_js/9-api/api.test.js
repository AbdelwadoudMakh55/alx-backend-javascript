const { expect } = require('chai');
const request = require('request');

describe('Index page test', () => {
  it('API test', (done) => {
    request('http://localhost:7865', (err, data) => {
      if (err) {
        return;
      }
      expect(data.statusCode).to.equal(200);
      expect(data.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
describe('Cart page', () => {
  it('returns 200 when id is a number', (done) => {
    request('http://localhost:7865/cart/17', (err, data) => {
      if (err) {
        done();
      }
      expect(data.statusCode).to.equal(200);
      expect(data.body).to.equal('Payment methods for cart 17');
      done();
    });
  });

  it('returns 404 when id is not a number', (done) => {
    request('http://localhost:7865/cart/aa', (err, data) => {
      if (err) {
        expect(data.statusCode).to.equal(404);
        done();
      }
      done();
    });
  });
});
