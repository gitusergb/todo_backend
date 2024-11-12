const express = require('express');
 const mongoose = require('mongoose');
 const {todoRouter} = require('./routes/todoRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
// let tasks = []; 
 const {connection} = require("./db")


app.use(express.static('public'));
app.use('/todos',todoRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT,async() => {
  try {
    await connection
    console.log("Database connection Established")
    console.log(`Server is running at http://localhost:${PORT}`);
}
catch {
    console.log("Database connection Failed")
}
console.log("Server Started")
})

