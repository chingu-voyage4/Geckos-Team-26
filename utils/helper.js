const jwt = require("jsonwebtoken");

function createToken(email, secret) {
  return jwt.sign(email, secret);
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
