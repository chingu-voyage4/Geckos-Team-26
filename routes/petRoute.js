const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");

const { getAllPetsForUser } = require("../utils/helper");
const Pet = require("../models/Pet");

// List the pets for a particular owner
router.get("/:userId", checkAuth, (req, res) => {
  const id = req.params.userId;
  getAllPetsForUser(id).then(response => {
    res.status(200).json(response);
  });
});

module.exports = router;
