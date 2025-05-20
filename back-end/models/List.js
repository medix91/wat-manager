const mongoose = require('mongoose');
const ListSchema = new mongoose.Schema({
  name: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  userId: String, // à adapter selon l'authentification
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('List', ListSchema);
