const router = require("express").Router();
const { checkNewUserInput } = require("../utils/validateUserInput");
const { hashPassword, compareHashes } = require("../utils/hashing");
const { SaveUserToDB, GetUserFromDB } = require("../utils/mongo");
const { createToken, createUserData } = require("../utils/helper");
const { jwtSecret } = require("../utils/config");

router.post("/signup", (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    passwordVerify: req.body.passwordVerify
  };

  checkNewUserInput(newUser)
    .then(() => {
      hashPassword(newUser.password).then(hashedPassword => {
        const validNewUser = {
          username: newUser.username,
          email: newUser.email,
          password: hashedPassword
        };

        SaveUserToDB(validNewUser)
          .then(user => {
            const token = createToken(user.email, jwtSecret);
            const userData = createUserData(user);
            return res.json({ token, userData });
          })
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
        const token = createToken(user.email, jwtSecret);
        const userData = createUserData(user);
        return res.json({ token, userData });
      });
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;
