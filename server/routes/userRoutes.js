const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');

// ✅ GET /api/users - Get all users (Admin)
router.get('/', getAllUsers);

module.exports = router;
