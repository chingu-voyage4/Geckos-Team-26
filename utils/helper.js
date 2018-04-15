const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const PetModel = require("../models/Pet");
const { dbUrl } = require("./config");

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

const getAllPetsForUser = ownerId => {
  mongoose.connect(dbUrl);

  return new Promise((resolve, reject) => {
    PetModel.find({ owner: ownerId }, "petName petAvatar")
      .select("_id petName petAvatar")
      .exec()
      .then(docs => {
        mongoose.disconnect();
        // Will return an empty array if no pets are associated with user
        return resolve(
          (response = {
            count: docs.length,
            pets: docs.map(doc => {
              return {
                _id: doc._id,
                petName: doc.petName,
                petAvatar: doc.petAvatar,
                request: {
                  type: "GET",
                  url: "http://localhost:3005/pets/pet/" + doc._id
                }
              };
            })
          })
        );
      })
      .catch(err => {
        mongoose.disconnect();
        return resolve(res => {
          res.status(500).json({
            error: err
          });
        });
      });
  });
};

module.exports = {
  createToken,
  createUserData,
  getAllPetsForUser
};
