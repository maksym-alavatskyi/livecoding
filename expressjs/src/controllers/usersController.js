// controllers/usersController.js

const express = require('express');
const router = express.Router();
const usersService = require('../services/usersService');

// Register a new user
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const result = usersService.addUser(username, password);
  res.json(result);
});

// Delete a user
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = usersService.deleteUser(id);
  res.json(result);
});

// Login a user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await usersService.login(username, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
