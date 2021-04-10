require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content from public
app.use(express.static(path.join(__dirname, 'client/public')));

// Routes
const htmlRoutes = require('./routes/html-routes');
// const apiRoutes = require('./routes/api-routes');
app.use(htmlRoutes);
// app.use(apiRoutes);

// Start server, will need to add the db connection here with a .then for app.listen
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
    📡 The app is listening on PORT ${PORT}.`);
});
