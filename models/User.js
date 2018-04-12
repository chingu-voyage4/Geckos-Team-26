const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, unique: true },
  imgUrl: { type: String, default: "none" },
  password: { type: String, required: true, minlength: 8 },
  date: { type: Date, required: true, default: Date.now() }
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
