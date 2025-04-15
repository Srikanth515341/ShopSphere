const API_URL = "http://localhost:5000/api";

// ✅ Get all products
export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// ✅ Get product by name
export const fetchProductByName = async (name) => {
  try {
    const response = await fetch(`${API_URL}/products/name/${name}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching product by name:", error);
    return null;
  }
};
