const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Client placeholder");
});

module.exports = router;
