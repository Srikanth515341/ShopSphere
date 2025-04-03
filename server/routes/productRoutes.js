// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { createProduct, fetchProducts } = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', fetchProducts);

module.exports = router;
