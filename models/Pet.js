const mongoose = require("mongoose");

const PetSchema = mongoose.Schema;

const pet = new PetSchema({
  petName: { type: String, required: true },
  owner: { type: Schema.Objectid, ref: "User", required: true },
  petAvatar: { type: String },
  species: { type: String },
  breed: { type: String },
  dob: { type: Date },
  description: { type: String },
  sex: { type: String },
  neutered: { type: Boolean }
});

const PetModel = mongoose.model("pet", pet);

module.exports = PetModel;
