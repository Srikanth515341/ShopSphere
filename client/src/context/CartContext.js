import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import {
  getCartItemsAPI,
  addToCartAPI,
  removeCartItemAPI,
  clearCartAPI,
} from '../services/cartService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.id) {
      setUserId(user.id);
    }
  }, []);

  const loadCart = useCallback(async () => {
    try {
      if (userId) {
        const items = await getCartItemsAPI(userId);
        setCartItems(Array.isArray(items) ? items : []);
      }
    } catch (error) {
      console.error('Cart fetch failed', error);
      setCartItems([]);
    }
  }, [userId]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const addToCart = async (product, quantity = 1) => {
    try {
      const added = await addToCartAPI({ userId, productId: product.id, quantity });
      if (added) await loadCart();
    } catch (error) {
      console.error('Add to cart failed', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const removed = await removeCartItemAPI(itemId);
      if (removed) await loadCart();
    } catch (error) {
      console.error('Remove from cart failed', error);
    }
  };

  const clearCart = async () => {
    try {
      const cleared = await clearCartAPI(userId);
      if (cleared) setCartItems([]);
    } catch (error) {
      console.error('Clear cart failed', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
