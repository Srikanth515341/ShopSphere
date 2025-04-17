const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductByName,
  getProductsByCategory,
  getAllCategories, // ✅ Importing category list controller
} = require('../controllers/productController');

// ✅ Get all products
router.get('/', getAllProducts);

// ✅ Get a product by name
router.get('/name/:name', getProductByName);

// ✅ Get products by category
router.get('/category/:category', getProductsByCategory);

// ✅ Get all unique categories (used in Categories page)
router.get('/categories', getAllCategories);

module.exports = router;
