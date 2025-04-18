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
      bgColor: '#E3F2FD'
    }));

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ GET product by ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ ADD a new product
exports.addProduct = async (req, res) => {
  try {
    const { name, category, price, image, details } = req.body;

    const result = await pool.query(
      'INSERT INTO products (name, category, price, image, details) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, category, price, image, details]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ UPDATE product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image, category, details } = req.body;

    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2, image = $3, category = $4, details = $5 WHERE id = $6 RETURNING *',
      [name, price, image, category, details, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found or not updated' });
    }

    res.json({ message: 'Product updated successfully', product: result.rows[0] });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ DELETE product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found or already deleted' });
    }

    res.json({ message: 'Product deleted successfully', deletedProduct: result.rows[0] });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
