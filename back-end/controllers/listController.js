const List = require('../models/List');
const Category = require('../models/Category');

// GET all lists
exports.getLists = async (req, res) => {
  try {
    const lists = await List.find().populate('category');
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new list
exports.createList = async (req, res) => {
  try {
    const { name, category } = req.body;

    // Vérifie que la catégorie existe
    const catExists = await Category.findById(category);
    if (!catExists) return res.status(400).json({ error: "Catégorie invalide" });

    const newList = new List({ name, category });
    const saved = await newList.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET one list by ID
exports.getListById = async (req, res) => {
  try {
    const list = await List.findById(req.params.id).populate('category');
    if (!list) return res.status(404).json({ error: 'Liste introuvable' });
    res.json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update list
exports.updateList = async (req, res) => {
  try {
    const updated = await List.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Liste introuvable' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE list
exports.deleteList = async (req, res) => {
  try {
    const deleted = await List.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Liste introuvable' });
    res.json({ message: 'Liste supprimée' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
