const express = require('express');
const router = express.Router();
const List = require('../models/List');

// GET toutes les listes
router.get('/', async (req, res) => {
  const lists = await List.find().populate('category');
  res.json(lists);
});

// POST une nouvelle liste
router.post('/', async (req, res) => {
    try{
  const newList = new List(req.body);
  const saved = await newList.save();
  res.status(201).json(saved);
    }
    catch(err){
            res.status(400).json({ error: err.message });
    }
});

module.exports = router;
