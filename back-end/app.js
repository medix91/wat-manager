const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/lists', require('./routes/listRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));



app.get('/', (req, res) => {
  res.send('API Task Manager est en ligne 🚀');
});

module.exports = app;
