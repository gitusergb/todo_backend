const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title:  { type:String,required:true},
  description: { type:String,required:true},
  dueDate: { type:Date},
  completed:{type:String},
},{
  versionKey:false
});

const todos = mongoose.model('todos',todoSchema);

module.exports = todos;