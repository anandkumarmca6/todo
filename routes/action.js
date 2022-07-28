const express = require('express');

const router = express.Router();

// import actions controller
const actionController = require('../controllers/action_controller');

// Middleware to decode data coming from browser
router.use(express.urlencoded({ extended: true }));

//  execute create function from actions_controller.js for request /action/create-todo
router.post('/create-todo', actionController.create);

// execute delete function from actions_controller.js for request /action/delete-todo
router.post('/delete-todo', actionController.delete);

module.exports = router;
