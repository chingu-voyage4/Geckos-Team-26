const mongoose = require("mongoose");

const UserSchema = mongoose.Schema;

const user = new UserSchema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  date: { type: Date, required: true, default: Date.now() }
});

const UserModel = mongoose.model("user", user);

module.exports = UserModel;
