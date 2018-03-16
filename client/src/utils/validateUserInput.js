/* eslint-disable */
import validator from "validator";

const validateUsernameLength = username => username.length >= 3;
const validateEmail = email => validator.isEmail(email);
const validatePasswordLength = password => password.length >= 8;
const verifyPassword = (password, passwordVerify) =>
  password === passwordVerify;

const validateSignUp = input => {
  if (!validateUsernameLength(input.username)) {
    return "Username should be at least 3 characters long";
  }
  if (!validateEmail(input.email)) {
    return "E-mail is not valid";
  }
  if (!validatePasswordLength(input.password)) {
    return "Password should be at least 3 characters long";
  }
  if (!verifyPassword(input.password, input.verifyPassword)) {
    return "Passwords don' match";
  }
  return "valid";
};
export default validateSignUp;
