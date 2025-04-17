const pool = require('../config/db');

// ✅ GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ GET product by name
exports.getProductByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE LOWER(name) = LOWER($1)', [name]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching product by name:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ GET products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE LOWER(category) = LOWER($1)', [category]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ GET all categories with image and bgColor
exports.getAllCategories = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT category, MIN(image) AS image
      FROM products
      GROUP BY category
    `);

    const categories = result.rows.map(row => ({
      title: row.category,
      image: row.image || 'default.png',
      bgColor: '#E3F2FD' // you can change color based on category if needed
    }));

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
