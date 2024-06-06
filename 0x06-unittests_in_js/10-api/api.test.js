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
      } else {
        expect(data.statusCode).to.equal(200);
        expect(data.body).to.equal('Payment methods for cart 17');
        done();
      }
    });
  });

  it('returns 404 when id is not a number', (done) => {
    request('http://localhost:7865/cart/aa', (err, data) => {
      if (err) {
        expect(data.statusCode).to.equal(404);
        done();
      } else {
        done();
      }
    });
  });
});
describe('test login and available payments', () => {
  it('Login', (done) => {
    data = JSON.stringify({userName: 'Said'})
    request.post({
      headers: { 'content-Type': 'application/json' },
      url: 'http://localhost:7865/login',
      body: data
    }, (err, data) => {
      if (err) {
        done();
      } else {
        expect(data.body).to.equal('Welcome Said');
        done();
      }
    })
  })
  it('payment methods', (done) => {
    request('http://localhost:7865/available_payments', (err, data) => {
      if (err) {
        done(err);
      } else {
        expect(JSON.parse(data.body)).to.deep.equal({ payment_methods : {credit_cards: true, paypal: false} });
        done();
      }
    })
  })
});
