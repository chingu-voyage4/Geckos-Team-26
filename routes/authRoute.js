const router = require("express").Router();
const checkNewUserInput = require("../utils/validateUserInput");
const hashPassword = require("../utils/hashing");
const { dbUrl } = require("../utils/config");

const mongoose = require("mongoose");
const UserModel = require("../models/User");

router.post("/signup", (req, res) => {
  mongoose.connect(dbUrl);

  const newUser = {
    email: req.body.email,
    password: req.body.password,
    passwordVerify: req.body.passwordVerify
  };

  checkNewUserInput(newUser)
    .then(() => {
      hashPassword(newUser.password).then(hashedPassword => {
        const validNewUser = new UserModel({
          email: newUser.email,
          password: hashedPassword
        });

        validNewUser
          .save()
          .then(() => {
            mongoose.disconnect();
            return res.json({ message: "OK" });
          })
          .catch(() => {
            mongoose.disconnect();
            return res
              .status(500)
              .json({ message: "Could not create new user" });
          });
      });
    })
    .catch(() => {
      mongoose.disconnect();
      return res.status(400).json({ message: "Invalid input" });
    });
});

module.exports = router;
