const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre de la tâche est requis'],
    trim: true,
    minlength: [3, 'Le titre doit contenir au moins 3 caractères']
  },
  dateFin: {
    type: Date,
    required: [true, 'La date de fin est requise']
  },
  isFinished: {
    type: Boolean,
    default: false
  },
  isUrgent: {
    type: Boolean,
    default: false
  },
  comment: {
    type: String,
    maxlength: [500, 'Le commentaire ne peut pas dépasser 500 caractères']
  },
  status: {
    type: String,
    enum: {
      values: ['pas commencé', 'en cours', 'terminé'],
      message: 'Le statut doit être "pas commencé", "en cours" ou "terminé"'
    },
    default: 'pas commencé'
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
    required: [true, 'La tâche doit appartenir à une liste']
  }
});

module.exports = mongoose.model('Task', TaskSchema);
