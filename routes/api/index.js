const router = require('express').Router();
const userRoutes = require('./users');

// this is the middle part of the url/route
router.use('/users', userRoutes);

module.exports = router;
