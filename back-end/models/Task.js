const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  title: String,
  dateFin: Date,
  isFinished: { type: Boolean, default: false },
  isUrgent: { type: Boolean, default: false },
  comment: String,
  status: { type: String, enum: ['pas commencé', 'en cours', 'terminé'], default: 'pas commencé' },
  list: { type: mongoose.Schema.Types.ObjectId, ref: 'List' }
});
module.exports = mongoose.model('Task', TaskSchema);
