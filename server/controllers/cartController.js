const pool = require('../config/db');

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const existing = await pool.query(
      'SELECT * FROM cart WHERE user_id = $1 AND product_id = $2',
      [userId, productId]
    );

    let result;
    if (existing.rows.length > 0) {
      result = await pool.query(
        'UPDATE cart SET quantity = quantity + $1 WHERE user_id = $2 AND product_id = $3 RETURNING *',
        [quantity, userId, productId]
      );
    } else {
      result = await pool.query(
        'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
        [userId, productId, quantity]
      );
    }

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ error: 'Failed to add to cart' });
  }
};

exports.getCartItems = async (req, res) => {
  const { userId } = req.params;

  if (!userId || isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid userId' });
  }

  try {
    const result = await pool.query(
      `SELECT cart.id, cart.product_id, cart.quantity, products.name, products.price, products.image
       FROM cart
       JOIN products ON cart.product_id = products.id
       WHERE cart.user_id = $1`,
      [userId]
    );

    const cartItems = result.rows.map(item => ({
      id: item.id,
      productId: item.product_id,
      name: item.name,
      quantity: item.quantity,
      discountPrice: item.price,
      image: item.image,
    }));

    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

exports.removeFromCart = async (req, res) => {
  const { itemId } = req.params;

  if (!itemId || isNaN(itemId)) {
    return res.status(400).json({ error: 'Invalid itemId' });
  }

  try {
    await pool.query('DELETE FROM cart WHERE id = $1', [itemId]);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ error: 'Failed to remove item' });
  }
};

exports.clearCart = async (req, res) => {
  const { userId } = req.params;

  if (!userId || isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid userId' });
  }

  try {
    await pool.query('DELETE FROM cart WHERE user_id = $1', [userId]);
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ error: 'Failed to clear cart' });
  }
};
