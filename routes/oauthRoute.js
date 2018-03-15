const router = require("express").Router();
const jwt = require("jsonwebtoken");
const randomString = require("randomstring");

const { hashPassword } = require("../utils/hashing");
const { GetUserFromDB, SaveUserToDB } = require("../utils/mongo");
const { jwtSecret } = require("../utils/config");

router.post("/google", (req, res) => {
  const data = {
    accessToken: req.body.accesstoken,
    user: {
      email: req.body.email,
      imgUrl: req.body.imgurl,
      username: req.body.name
    }
  };

  // Check access token

  if (true) {
    GetUserFromDB(data.user)
      .then(() => {
        const token = jwt.sign(data.user.email, jwtSecret);
        return res.json({ token });
      })
      .catch(() => {
        hashPassword(randomString.generate()).then(hash => {
          data.user.password = hash;

          SaveUserToDB(data.user)
            .then(() => {
              const token = jwt.sign(data.user.email, jwtSecret);
              return res.json({ created: true, token });
            })
            .catch(() => res.json({ message: "User not created in db" }));
        });
      });
  } else {
    res.status(400).json({ message: "Not Authorised" });
  }
});

module.exports = router;
