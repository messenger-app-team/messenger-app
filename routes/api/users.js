const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Route matching /api/users
router.route('/')
    .post(usersController.create);