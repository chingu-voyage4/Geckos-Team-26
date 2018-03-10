const router = require("express").Router();
const jwt = require("jsonwebtoken");
const checkNewUserInput = require("../utils/validateUserInput");
const { hashPassword, compareHashes } = require("../utils/hashing");
const { SaveUserToDB, GetUserFromDB } = require("../utils/mongo");
const { jwtSecret } = require("../utils/config");

router.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    passwordVerify: req.body.passwordVerify
  };

  checkNewUserInput(newUser)
    .then(() => {
      hashPassword(newUser.password).then(hashedPassword => {
        const validNewUser = {
          email: newUser.email,
          password: hashedPassword
        };

        SaveUserToDB(validNewUser)
          .then(response => res.json(response))
          .catch(response => {
            res.status(500).json({ message: response.message });
          });
      });
    })
    .catch(() => res.status(400).json({ message: "Invalid input" }));
});

router.post("/login", (req, res) => {
  const userInput = {
    email: req.body.email,
    password: req.body.password
  };

  GetUserFromDB(userInput)
    .then(user => {
      compareHashes(userInput.password, user.password).then(result => {
        if (!result) {
          return res.status(400).json({ message: "Incorrect password" });
        }
        const token = jwt.sign(user.email, jwtSecret);
        return res.json({ token });
      });
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;
