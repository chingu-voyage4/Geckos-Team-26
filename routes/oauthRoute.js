const router = require("express").Router();
const randomString = require("randomstring");

const { hashPassword } = require("../utils/hashing");
const { GetUserFromDB, SaveUserToDB } = require("../utils/mongo");
const { createToken, createUserData } = require("../utils/helper");
const { jwtSecret } = require("../utils/config");
const { fetchUrl } = require("fetch");

router.post("/google", (req, res) => {
  const data = {
    accessToken: req.body.accesstoken,
    user: {
      email: req.body.email,
      imgUrl: req.body.imgurl,
      username: req.body.name
    }
  };

  fetchUrl(
    `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${
      data.accessToken
    }`,
    (error, meta, body) => {
      if (JSON.parse(body.toString()).exp < Date.now()) {
        GetUserFromDB(data.user)
          .then(user => {
            const token = createToken(user.email, jwtSecret);
            const userData = createUserData(user);
            return res.json({ token, userData });
          })
          .catch(() => {
            hashPassword(randomString.generate()).then(hash => {
              data.user.password = hash;

              SaveUserToDB(data.user)
                .then(user => {
                  const token = createToken(user.email, jwtSecret);
                  const userData = createUserData(user);
                  return res.json({ token, userData });
                })
                .catch(() => res.json({ message: "User not created in db" }));
            });
          });
      } else {
        res.status(400).json({ message: "Not Authorised" });
      }
    }
  );
});

module.exports = router;
