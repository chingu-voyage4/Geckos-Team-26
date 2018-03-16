const mongoose = require("mongoose");
const UserModel = require("../models/User");
const { dbUrl } = require("../utils/config");

const SaveUserToDB = user => {
  mongoose.connect(dbUrl);

  const newUser = new UserModel({
    username: user.username,
    email: user.email
  });

  if (user.password) {
    newUser.password = user.password;
  }
  if (user.imgUrl) {
    newUser.imgUrl = user.imgUrl;
  }

  return new Promise((resolve, reject) => {
    newUser
      .save()
      .then(() => {
        mongoose.disconnect();
        return resolve({ message: "OK" });
      })
      .catch(() => {
        mongoose.disconnect();
        return reject(new Error("Could not create new user"));
      });
  });
};

const GetUserFromDB = user => {
  mongoose.connect(dbUrl);

  return new Promise((resolve, reject) => {
    UserModel.findOne({ email: user.email })
      .then(doc => {
        if (doc.length < 1) {
          return reject(new Error("Could not find user"));
        }
        mongoose.disconnect();
        return resolve(doc);
      })
      .catch(() => {
        mongoose.disconnect();
        return reject(new Error("Could not find user"));
      });
  });
};

module.exports = {
  SaveUserToDB,
  GetUserFromDB
};
