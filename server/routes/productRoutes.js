// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  createProduct,
  fetchProducts,
  fetchProductById
} = require('../controllers/productController');

// Get all products
router.get('/', fetchProducts);

// Get product by ID
router.get('/:id', fetchProductById);

// Add product
router.post('/', createProduct);

// Update product
router.put('/:id', createProduct); // If you plan to separate update logic, create a new controller method

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = require('../config/db');
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
