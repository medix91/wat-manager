const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// GET toutes les catégories
router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// POST une nouvelle catégorie
router.post('/', async (req, res) => {
    try{
  const newCategory = new Category(req.body);
  const saved = await newCategory.save();
  res.status(201).json(saved);
    }
    catch(err){
            res.status(400).json({ error: err.message });
    }
});

module.exports = router;
