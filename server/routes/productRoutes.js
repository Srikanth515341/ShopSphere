// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all products
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const result = await pool.query(
      'INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, image]
    );
    res.status(201).json({ message: 'Product added successfully', product: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image } = req.body;

    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3, image = $4 WHERE id = $5 RETURNING *',
      [name, description, price, image, id]
    );

    res.json({ message: 'Product updated', product: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
