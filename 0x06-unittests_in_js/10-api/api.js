const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
})
app.get('/available_payments', (req, res) => {
  const payment_methods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.send(payment_methods);
})
app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
})
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
