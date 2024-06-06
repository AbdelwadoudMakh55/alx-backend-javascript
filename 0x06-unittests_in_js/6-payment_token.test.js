const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {
  it('Async test', (done) => {
    setTimeout(() => {
      getPaymentTokenFromAPI(true)
        .then((data) => {
            expect(data).to.deep.equal({ data: 'Successful response from the API' });
            done();
        })
    }, 500);
  })
})
