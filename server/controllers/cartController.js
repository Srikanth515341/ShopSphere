const db = require('../config/db');

// ✅ Add item to cart (no need for name and price if already in DB)
exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await db.query(
      'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)',
      [userId, productId, quantity]
    );
    res.status(201).json({ message: 'Item added to cart' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
};

// ✅ Get all cart items for a user
exports.getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await db.query(
      `SELECT c.id, c.product_id, c.quantity, p.name, p.price, p.image
       FROM cart c
       JOIN products p ON c.product_id = p.id
       WHERE c.user_id = $1`,
      [userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Failed to fetch cart items' });
  }
};

// ✅ Delete a single item from cart
exports.deleteCartItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    await db.query('DELETE FROM cart WHERE id = $1', [itemId]);
    res.json({ message: 'Cart item deleted' });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ message: 'Failed to delete cart item' });
  }
};

// ✅ Clear cart for a user
exports.clearCart = async (req, res) => {
  const { userId } = req.params;

  try {
    await db.query('DELETE FROM cart WHERE user_id = $1', [userId]);
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Failed to clear cart' });
  }
};
