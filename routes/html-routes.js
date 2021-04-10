const express = require('express');
const path = require('path');
// Add mongoose, models and authentication

const router = express.Router();

router.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/public/index.html`));
});

module.exports = router;
