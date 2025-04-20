const pool = require('../config/db');

// ✅ Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Add new category
exports.addCategory = async (req, res) => {
  try {
    const { title, image, bgcolor } = req.body;

    if (!title || !image || !bgcolor) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await pool.query(
      'INSERT INTO categories (title, image, bgcolor) VALUES ($1, $2, $3) RETURNING *',
      [title, image, bgcolor]
    );

    res.status(201).json({ message: 'Category added successfully', category: result.rows[0] });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Update category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image, bgcolor } = req.body;

    const result = await pool.query(
      'UPDATE categories SET title = $1, image = $2, bgcolor = $3 WHERE id = $4 RETURNING *',
      [title, image, bgcolor, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Category not found or not updated' });
    }

    res.json({ message: 'Category updated successfully', category: result.rows[0] });
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// ✅ Delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Category not found or already deleted' });
    }

    res.json({ message: 'Category deleted successfully', deletedCategory: result.rows[0] });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
