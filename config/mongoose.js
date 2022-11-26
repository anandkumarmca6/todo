// import mongoose
const mongoose = require('mongoose');
// connect to mongo db database
//mongoose.connect('mongodb://localhost/todo_development');
mongoose.connect(
  'mongodb://mongo:ybV2rkhY9Gf64TzKOH4D@containers-us-west-94.railway.app:6264'
);
const db = mongoose.connection;

// if any error in connection
db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

// after connection is sucessfull
db.once('open', function () {
  console.log('connected to database');
});

module.exports = db;
