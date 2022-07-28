const express = require('express');

// Setup router
const router = express.Router();
// Setting path for controller function
const todoController = require('../controllers/todo_controller');
//  Setting controller function to a route

router.get('/', todoController.todo);
// Route all requests starting with '/action' to action.js file
router.use('/action', require('./action'));

module.exports = router;
