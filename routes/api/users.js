const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// route to /api/users
router.route('/')
    .get(usersController.findAll)
    .post(usersController.create);

module.exports = router;