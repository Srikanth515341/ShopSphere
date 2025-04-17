const API_URL = "http://localhost:5000/api/orders";

// ✅ Place Order
export const placeOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_URL}/place`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error placing order:", error);
    return { error: "Something went wrong while placing the order" };
  }
};

// ✅ Fetch Order History
export const fetchOrderHistory = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching order history:", error);
    return [];
  }
};
