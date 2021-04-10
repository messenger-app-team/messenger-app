require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content from public
app.use(express.static('public'));

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
    📡 The app is listening on PORT ${PORT}.`);
});
