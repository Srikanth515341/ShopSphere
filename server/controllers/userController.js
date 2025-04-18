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

// ✅ UPDATE user role by ID
exports.updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET role = $1 WHERE id = $2 RETURNING *',
      [role, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User role updated successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Error updating user role:', error);
    res.status(500).json({ error: 'Failed to update user role' });
  }
};
