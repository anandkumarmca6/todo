// import mongoose
const mongoose = require('mongoose');
// connect to mongo db database
//mongoose.connect('mongodb://localhost/todo_development');
mongoose.connect(
  'mongodb://mongo:Ma74isahXkTcwZAOgxmQ@containers-us-west-18.railway.app:6141'
);
const db = mongoose.connection;

// if any error in connection
db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

// after connection is sucessfull
db.once('open', function () {
  console.log('connected to database');
});

module.exports = db;
