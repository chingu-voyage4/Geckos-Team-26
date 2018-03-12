const validator = require("validator");

const validateEmail = email => validator.isEmail(email);
const validatePasswordLength = passwordLength => passwordLength >= 8;
const verifyPassword = (password, passwordVerify) =>
  password === passwordVerify;

const checkNewUserInput = user =>
  new Promise((resolve, reject) => {
    let isValidEmail = false;
    let isPasswordValidLength = false;
    let isPasswordVerified = false;

    isValidEmail = validateEmail(user.email);
    isPasswordValidLength = validatePasswordLength(user.password.length);

    if (user.passwordVerify !== undefined) {
      isPasswordVerified = verifyPassword(user.password, user.passwordVerify);
    } else {
      isPasswordVerified = true;
    }

    if (
      isValidEmail === false ||
      isPasswordValidLength === false ||
      isPasswordVerified === false
    ) {
      return reject(new Error("Invalid input"));
    }

    return resolve();
  });

module.exports = {
  validateEmail,
  validatePasswordLength,
  verifyPassword,
  checkNewUserInput
};
