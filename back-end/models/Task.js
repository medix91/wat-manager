const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date
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
    type: String
  },
  status: {
    type: String,
    enum: ['pas commencé', 'en cours', 'terminé'],
    default: 'pas commencé'
  },
  category: {
    type: String, // ou ObjectId si tu as un modèle Category
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
