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
    PetModel.find({ owner: ownerId })
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
                species: doc.species,
                breed: doc.breed,
                dob: doc.dob,
                description: doc.description,
                sex: doc.sex,
                neutered: doc.neutered
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

const SavePetToDB = pet => {
  mongoose.connect(dbUrl);

  const newPet = new PetModel({
    petName: pet.petName,
    owner: pet.owner,
    petAvatar: pet.petAvatar,
    species: pet.species,
    breed: pet.breed,
    dob: pet.dob,
    description: pet.description,
    sex: pet.sex,
    neutered: pet.neutered
  });

  return new Promise((resolve, reject) => {
    newPet
      .save()
      .then(response => {
        mongoose.disconnect();
        return resolve(response);
      })
      .catch(() => {
        mongoose.disconnect();
        return reject(new Error("Could not create new pet"));
      });
  });
};

module.exports = {
  createToken,
  createUserData,
  getAllPetsForUser,
  SavePetToDB
};
