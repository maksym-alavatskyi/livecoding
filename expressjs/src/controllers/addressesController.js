// controllers/addressesController.js

const express = require('express');
const router = express.Router();
const addressesService = require('../services/addressesService');
const usersService = require('../services/usersService');

// Create a new address
router.post('/create/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const { street, city, state, postalCode, country } = req.body;
  const user = usersService.findUserById(userId);
  const result = await addressesService.addAddress(user, street, city, state, postalCode, country);
  res.json(result);
});

// Delete an address
router.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = addressesService.deleteAddress(id);
  res.json(result);
});

// Get addresses by user
router.get('/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const result = addressesService.fetchAddressesByUser(userId);
  res.json(result);
});

module.exports = router;
