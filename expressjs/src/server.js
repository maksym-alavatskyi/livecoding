// server.js

const express = require('express');
const bodyParser = require('body-parser');

const ordersController = require('./controllers/ordersController');
const productsController = require('./controllers/productsController');
const usersController = require('./controllers/usersController');
const addressesController = require('./controllers/addressesController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use('/orders', ordersController);
app.use('/products', productsController);
app.use('/users', usersController);
app.use('/addresses', addressesController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
