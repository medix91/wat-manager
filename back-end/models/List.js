const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom de la liste est requis'],
    trim: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Une catégorie est requise']
  },
  userId: {
    type: String,
    default: 'anonymous' // à modifier si authentification ajoutée
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('List', ListSchema);
