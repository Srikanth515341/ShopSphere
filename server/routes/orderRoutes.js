// server/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { createOrder, fetchOrders } = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', fetchOrders); // ✅ Admin use

module.exports = router;
