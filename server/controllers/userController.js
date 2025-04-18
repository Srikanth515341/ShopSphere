const pool = require('../config/db');

// ✅ GET all users
exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT id, email, role, created_at FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
