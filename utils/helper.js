const jwt = require("jsonwebtoken");

function createToken(id, email, secret) {
  return jwt.sign(
    {
      id,
      email
    },
    secret,
    {
      expiresIn: "1h"
    }
  );
}

function createUserData(rawUser) {
  return {
    id: rawUser.id,
    username: rawUser.username,
    email: rawUser.email,
    imgUrl: rawUser.imgUrl
  };
}

module.exports = {
  createToken,
  createUserData
};
