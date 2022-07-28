const express = require('express');
const port = 8000;

const app = express();

//  import database configuaration
const db = require('./config/mongoose');

// set path for static files
app.use(express.static('./assets'));
// Use express route
app.use('/', require('./routes'));
// Set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});
