require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Routes
const routes = require('./routes');
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/messenger_db',
  // mongoose settings
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start server, will need to add the db connection here with a .then for app.listen
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
    📡 The app is listening on PORT ${PORT}.
    `);
});
