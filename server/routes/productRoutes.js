const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductByName,
  getProductsByCategory,
  getAllCategories,
  getProductById,
  updateProduct,
  deleteProduct,
  addProduct,
  deleteCategory // ✅ newly added
} = require('../controllers/productController');

// ✅ Get all products
router.get('/', getAllProducts);

// ✅ Create a new product
router.post('/', addProduct);

// ✅ Get a product by name
router.get('/name/:name', getProductByName);

// ✅ Get products by category
router.get('/category/:category', getProductsByCategory);

// ✅ Get all unique categories (used in Categories page)
router.get('/categories', getAllCategories);

// ✅ Get a product by ID (for Edit page)
router.get('/id/:id', getProductById);

// ✅ Update a product by ID
router.put('/:id', updateProduct);

// ✅ Delete a product by ID
router.delete('/:id', deleteProduct);

// ✅ Delete a category (all products in it)
router.delete('/category/:category', deleteCategory); // ✅ NEW

module.exports = router;
