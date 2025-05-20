const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET toutes les tâches
router.get('/', async (req, res) => {
  const tasks = await Task.find().populate('list');
  res.json(tasks);
});

// POST une nouvelle tâche
router.post('/', async (req, res) => {
    try{
  const newTask = new Task(req.body);
  const saved = await newTask.save();
  res.status(201).json(saved);
    }
    catch(err){
            res.status(400).json({ error: err.message });
    }
});

module.exports = router;
