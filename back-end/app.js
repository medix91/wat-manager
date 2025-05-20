const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
require('dotenv').config();

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/lists', require('./routes/listRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));




app.get('/', (req, res) => {
  res.send('API Task Manager est en ligne 🚀');
});
app.use((err, req, res, next) => {
  console.error(err.stack); // 👈 logs l'erreur
  res.status(500).json({ error: 'Erreur serveur' });
});

module.exports = app;
