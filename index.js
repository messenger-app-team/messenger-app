require('dotenv').config();
const express = require('express');
const path = require('path');
const os = require('os');
const ip = require('ip');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content from public
app.use(express.static(path.join(__dirname, 'client/public')));

// Routes
const htmlRoutes = require('./routes/html-routes');
// const apiRoutes = require('./routes/api-routes');
app.use(htmlRoutes);
// app.use(apiRoutes);

// // added unified typlology and use create index Connection code for now
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

// Start server, will need to add the db connection here with a .then for app.listen
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
    📡 The app is listening on PORT:${PORT}

    🌐 local: http://${os.hostname()}:${PORT} || http://${ip.address()}:${PORT}

    `);
});
