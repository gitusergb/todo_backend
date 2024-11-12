const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { todoRouter } = require('./routes/todoRoutes');
const { connection } = require('./db');

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/todos', todoRouter);

// Server port
const PORT = process.env.PORT || 5000;

// Start the server and connect to the database
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connection established");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
