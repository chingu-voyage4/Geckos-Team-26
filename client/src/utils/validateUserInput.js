/* eslint-disable */
import validator from "validator";

const validateUsernameLength = username => username.length >= 3;
const validateEmail = email => validator.isEmail(email);
const validatePasswordLength = password => password.length >= 8;
const verifyPassword = (password, passwordVerify) =>
  password === passwordVerify;

const validateSignUp = input => input;
