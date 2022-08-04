// import mongoose
const mongoose = require('mongoose');

// database schema definition
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  due_date: {
    type: String,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
