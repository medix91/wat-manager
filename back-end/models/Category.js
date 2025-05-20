const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis'],
    unique: true,
    trim: true,
    minlength: [2, 'Le nom doit contenir au moins 2 caractères']
  },
  color: {
    type: String,
    required: [true, 'La couleur est requise'],
    match: [/^#[0-9A-Fa-f]{6}$/, 'Couleur invalide (doit être hexadécimale)']
  },
  icon: {
    type: String,
    required: [true, 'L’icône est requise']
  }
});

module.exports = mongoose.model('Category', CategorySchema);
