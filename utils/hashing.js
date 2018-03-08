const bcrypt = require("bcrypt");

const saltRounds = 10;

const hashPassword = pass =>
  new Promise((resolve, reject) => {
    bcrypt.hash(pass, saltRounds, (err, hash) => {
      if (err) {
        return reject(new Error({ message: "Failed to hash password" }));
      }

      return resolve(hash);
    });
  });

module.exports = hashPassword;
