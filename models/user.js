const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for user info on signup will be used for user search, login info stored on firebase.
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Export User model for use in usersController
module.exports = User;
