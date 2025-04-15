const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductByName,
  getProductsByCategory
} = require('../controllers/productController');

// GET /api/products
router.get('/', getAllProducts);

// GET /api/products/name/:name
router.get('/name/:name', getProductByName);

// GET /api/products/category/:category
router.get('/category/:category', getProductsByCategory);

module.exports = router;
