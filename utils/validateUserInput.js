const validator = require("validator");

const validateUsernameLength = username => username.length >= 3;
const validateEmail = email => validator.isEmail(email);
const validatePasswordLength = password => password.length >= 8;
const verifyPassword = (password, passwordVerify) =>
  password === passwordVerify;

const checkNewUserInput = user =>
  new Promise((resolve, reject) => {
    if (
      validateUsernameLength(username) &&
      validateEmail(user.email) &&
      validatePasswordLength(user.password) &&
      verifyPassword(user.password, user.passwordVerify)
    ) {
      return resolve();
    }

    return reject(new Error("Invalid input"));
  });

module.exports = {
  validateUsernameLength,
  validateEmail,
  validatePasswordLength,
  verifyPassword,
  checkNewUserInput
};
