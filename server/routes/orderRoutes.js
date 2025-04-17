const express = require('express');
const router = express.Router();
const { placeOrder, getOrdersByUser } = require('../controllers/orderController');

// ✅ POST /api/orders/place - Place a new order
router.post('/place', placeOrder);

// ✅ GET /api/orders/:userId - Fetch orders for a user
router.get('/:userId', getOrdersByUser);

module.exports = router;
