// client/src/services/categoryService.js

import axios from 'axios';

const API = 'http://localhost:5000/api/categories';

// ✅ Fetch all categories
export const fetchCategories = async () => {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// ✅ Add a new category
export const addCategory = async (categoryData) => {
  try {
    const res = await axios.post(API, categoryData);
    return res.data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

// ✅ Update a category
export const updateCategory = async (id, updatedData) => {
  try {
    const res = await axios.put(`${API}/${id}`, updatedData);
    return res.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

// ✅ Delete a category
export const deleteCategory = async (id) => {
  try {
    const res = await axios.delete(`${API}/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};
