// import database model
const Todo = require('../models/todo');

module.exports.create = function (req, res) {
  // insert record
  let due_date = req.body.due_date;
  console.log(due_date);
  if (req.body.due_date.length == 0) {
    due_date = 'No Deadline';
  } else {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    due_date = new Date(due_date).toLocaleDateString('en-US', options);
  }
  Todo.create(
    {
      description: req.body.description,
      category: req.body.category,
      due_date: due_date,
    },
    function (err) {
      if (err) {
        console.log('Error creating Todo');
        return;
      }
    }
  );
  return res.redirect('back');
};
//  delete records
module.exports.delete = function (req, res) {
  if (req.body.id == undefined) {
    console.log("User haven't selected any task to delete");
    return res.redirect('back');
  }
  // If only one task is to be deleted
  else if (typeof req.body.id == 'string') {
    Todo.findByIdAndDelete(req.body.id, function (err) {
      if (err) {
        console.log('error deleting task ');
        return;
      }
      return res.redirect('back');
    });
  }
  // If multiple tasks are to be deleted
  else {
    for (let i of req.body.id) {
      Todo.findByIdAndDelete(i, function (err) {
        if (err) {
          console.log('error deleting tasks ');
          return;
        }
      });
    }
    return res.redirect('back');
  }
};
