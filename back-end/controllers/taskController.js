const Task = require('../models/Task');
const List = require('../models/List');

// GET all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('list');
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new task
exports.createTask = async (req, res) => {
  try {
    const { title, dateFin, isFinished, isUrgent, comment, status, list } = req.body;

    const listExists = await List.findById(list);
    if (!listExists) return res.status(400).json({ error: "Liste invalide" });

    const newTask = new Task({
      title,
      dateFin,
      isFinished: isFinished || false,
      isUrgent: isUrgent || false,
      comment,
      status,
      list
    });

    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET one task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('list');
    if (!task) return res.status(404).json({ error: 'Tâche introuvable' });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update task
exports.updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Tâche introuvable' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE task
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Tâche introuvable' });
    res.json({ message: 'Tâche supprimée' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
