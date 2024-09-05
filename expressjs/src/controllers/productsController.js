// controllers/productsController.js

const express = require('express');
const router = express.Router();
const productsService = require('../services/productsService');

// Add a new product
router.post('/add', (req, res) => {
  const { name, price, description } = req.body;
  const result = productsService.addProduct(name, price, description);
  res.json(result);
});

// Delete a product
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = productsService.deleteProduct(id);
  res.json(result);
});

// Fetch all products
router.get('/', (req, res) => {
  const products = productsService.fetchProducts();
  res.json(products);
});

module.exports = router;
