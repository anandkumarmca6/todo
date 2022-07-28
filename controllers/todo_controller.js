const Todo = require('../models/todo');
module.exports.todo = function (req, res) {
  Todo.find({}, function (err, todo_list) {
    if (err) {
      console.log('error getting data');
      return;
    }
    return res.render('todo', {
      title: 'TODO App',
      todo_list: todo_list,
    });
  });
};
