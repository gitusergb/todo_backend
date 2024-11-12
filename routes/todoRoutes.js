const express = require('express');
const {getTodos,addTodo,updateTodo,deleteTodo} = require('../controller/todoController');
const  todoRouter = express.Router();

// Get posts of logged-in user
 todoRouter.get('/',getTodos);

// Add a new 
 todoRouter.post('/add',addTodo);

// Update a 
 todoRouter.patch('/update/:todoID',updateTodo);

// Delete a 
 todoRouter.delete('/delete/:todoID',deleteTodo);

module.exports = { todoRouter };