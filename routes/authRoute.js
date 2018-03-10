const router = require("express").Router();
const checkNewUserInput = require("../utils/validateUserInput");
const { hashPassword, compareHashes } = require("../utils/hashing");
const { dbUrl, jwtSecret } = require("../utils/config");

const mongoose = require("mongoose");
const UserModel = require("../models/User");

const jwt = require("jsonwebtoken");

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

router.post("/login", (req, res) => {
  mongoose.connect(dbUrl);

  const userInput = {
    email: req.body.email,
    password: req.body.password
  };

  UserModel.findOne({ email: userInput.email }, (err, user) => {
    if (err) {
      return res.json({ message: "No user found" });
    }

    compareHashes(userInput.password, user.password).then(result => {
      if (result) {
        const token = jwt.sign(userInput.email, jwtSecret);
        return res.json({ token });
      }

      return res.json({ message: "Incorrect password" });
    });

    return null;
  });
});

module.exports = router;
