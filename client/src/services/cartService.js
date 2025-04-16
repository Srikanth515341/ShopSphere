const API_URL = "http://localhost:5000/api/cart";

// ✅ Add product to cart
export const addToCartAPI = async ({ userId, productId, quantity = 1 }) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId, quantity }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
    return null;
  }
};

// ✅ Get cart items for user
export const getCartItemsAPI = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};

// ✅ Remove cart item
export const removeCartItemAPI = async (itemId) => {
  try {
    const response = await fetch(`${API_URL}/${itemId}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error removing item:", error);
    return null;
  }
};

// ✅ Clear cart
export const clearCartAPI = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/clear/${userId}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error clearing cart:", error);
    return null;
  }
};
