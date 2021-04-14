const db = require('../models');

// Methods
module.exports = {
  // Create user method
  create: (req, res) => {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
