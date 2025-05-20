// backend/seed/categories.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('../models/Category');

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch((err) => {
    console.error('❌ Erreur de connexion MongoDB:', err.message);
    process.exit(1);
  });

const categories = [
  { name: 'maison', color: '#FFB6C1', icon: '🏠' },
  { name: 'pro', color: '#ADD8E6', icon: '💼' },
  { name: 'santé', color: '#98FB98', icon: '🩺' },
  { name: 'courses', color: '#FFD700', icon: '🛒' },
  { name: 'loisirs', color: '#FFA07A', icon: '🎮' },
  { name: 'autre', color: '#D3D3D3', icon: '📌' }
];

const seedCategories = async () => {
  try {
    await Category.deleteMany(); // Nettoie d'abord la collection
    await Category.insertMany(categories);
    console.log('✅ Catégories insérées avec succès');
    process.exit();
  } catch (error) {
    console.error('❌ Erreur lors du seed des catégories :', error);
    process.exit(1);
  }
};

seedCategories();
