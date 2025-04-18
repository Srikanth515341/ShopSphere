const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  updateUserRole,
  deleteUser,
} = require('../controllers/userController');

// ✅ GET /api/users - Get all users
router.get('/', getAllUsers);

// ✅ PUT /api/users/role/:id - Update user role
router.put('/role/:id', updateUserRole);

// ✅ DELETE /api/users/:id - Delete user
router.delete('/:id', deleteUser);

module.exports = router;
