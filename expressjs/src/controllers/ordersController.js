// controllers/ordersController.js

const express = require('express');
const router = express.Router();
const ordersService = require('../services/ordersService');

// Add a new order
router.post('/add', (req, res) => {
  const { userId, productIds, totalAmount } = req.body;
  const result = ordersService.addOrder(userId, productIds, totalAmount);
  res.json(result);
});

// Delete an order
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = ordersService.deleteOrder(id);
  res.json(result);
});

// Fetch all orders
router.get('/', (req, res) => {
  const orders = ordersService.fetchOrders();
  res.json(orders);
});

module.exports = router;
