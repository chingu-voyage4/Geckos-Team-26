const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");

const { getAllPetsForUser, SavePetToDB } = require("../utils/helper");
const Pet = require("../models/Pet");

// List the pets for a particular owner
router.get("/:userId", checkAuth, (req, res) => {
  const id = req.params.userId;
  getAllPetsForUser(id).then(response => {
    res.status(200).json(response);
  });
});

// Save new pet to DB
router.post("/pet", (req, res) => {
  const pet = new Pet({
    petName: req.body.petName,
    owner: req.body.owner,
    petAvatar: req.body.petAvatar,
    species: req.body.species,
    breed: req.body.breed,
    dob: req.body.dob,
    description: req.body.description,
    sex: req.body.sex,
    neutered: req.body.neutered
  });
  SavePetToDB(pet).then(pet => {
    return res.json(pet);
  });
});

module.exports = router;
