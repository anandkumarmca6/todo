const Todo = require('../models/todo');
// Different colors for different categories
let colors = {
  personal: 'lightseagreen',
  work: 'darkmagenta',
  school: 'darkorange',
  cleaning: 'darkred',
  other: 'cyan',
};
module.exports.todo = function (req, res) {
  Todo.find({}, function (err, todo_list) {
    if (err) {
      console.log('error getting data');
      return;
    }
    return res.render('todo', {
      title: 'TODO App',
      todo_list: todo_list,
      color_list: colors,
    });
  });
};
