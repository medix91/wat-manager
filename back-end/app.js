// backend/app.js
const express = require('express');
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes');
const listRoutes = require('./routes/listRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;
