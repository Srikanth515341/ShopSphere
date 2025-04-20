const API_URL = "http://localhost:5000/api/cart";

// ✅ Add product to cart
export const addToCartAPI = async ({ userId, productId, quantity = 1 }) => {
  try {
    // Ensure valid number inputs
    if (!userId || !productId || isNaN(userId) || isNaN(productId)) {
      console.error("Invalid userId or productId for addToCartAPI");
      return null;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Number(userId),
        productId: Number(productId),
        quantity: Number(quantity),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Add to cart failed:", errorText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
    return null;
  }
};

// ✅ Get cart items for user
export const getCartItemsAPI = async (userId) => {
  try {
    if (!userId || isNaN(userId)) {
      console.error("Invalid userId for getCartItemsAPI");
      return [];
    }

    const response = await fetch(`${API_URL}/${Number(userId)}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Fetch cart failed:", errorText);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};

// ✅ Remove cart item
export const removeCartItemAPI = async (itemId) => {
  try {
    if (!itemId || isNaN(itemId)) {
      console.error("Invalid itemId for removeCartItemAPI");
      return null;
    }

    const response = await fetch(`${API_URL}/${Number(itemId)}`, {
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
    if (!userId || isNaN(userId)) {
      console.error("Invalid userId for clearCartAPI");
      return null;
    }

    const response = await fetch(`${API_URL}/clear/${Number(userId)}`, {
      method: "DELETE",
    });

    return await response.json();
  } catch (error) {
    console.error("Error clearing cart:", error);
    return null;
  }
};
