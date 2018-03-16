const validator = require("validator");

const blacklist = /[-!$%^&*()_+|~=`\\#{}[\]:";'<>?,./]/;

const validateUsernameLength = username =>
  username.length >= 3 && !blacklist.test(username);
const validateEmail = email => validator.isEmail(email);
const validatePasswordLength = password =>
  password.length >= 8 && !blacklist.test(password);
const verifyPassword = (password, passwordVerify) =>
  password === passwordVerify && !blacklist.test(passwordVerify);

const checkNewUserInput = user =>
  new Promise((resolve, reject) => {
    if (
      validateUsernameLength(user.username) &&
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
