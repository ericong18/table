const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/secrets').mongoURI;
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Start server
app.listen(port, () => {
  console.log("Listening on port " + port);
})

// Root path
app.get('/', (req, res) => {
  res.send('Hello World');
})