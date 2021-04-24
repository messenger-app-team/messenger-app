const db = require('../models');

// Methods
module.exports = {
  // Create user method
  create: (req, res) => {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: (req, res) => {
    db.User
      // query to list all users by username
      // Need to find out if need to set req.query on the front end to say all
      .find(req.query)
      .sort({ username: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
