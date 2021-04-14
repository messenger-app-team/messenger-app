// this is the middle part of the url/route
const router = require('express').Router();
const userRoutes = require('./users');

// Book routes
router.use('/users', userRoutes);

module.exports = router;