const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// GET all categories
router.get('/', categoryController.getAllCategories);

// POST a new category
router.post('/', categoryController.addCategory);

// PUT (update) a category by ID
router.put('/:id', categoryController.updateCategory);

// DELETE a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
