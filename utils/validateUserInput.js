const validator = require("validator");

const checkNewUserInput = user =>
  new Promise((resolve, reject) => {
    let isValidEmail = false;
    let isPasswordValidLength = false;
    let isPasswordVerified = false;

    if (validator.isEmail(user.email)) {
      isValidEmail = true;
    }
    if (user.password.length >= 8) {
      isPasswordValidLength = true;
    }
    if (user.passwordVerify !== undefined) {
      if (user.password === user.passwordVerify) {
        isPasswordVerified = true;
      }
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

module.exports = checkNewUserInput;
