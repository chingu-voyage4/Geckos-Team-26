const router = require("express").Router();

router.post("/", (req, res) => {
  res.json({ message: "Login handler" });
});

module.exports = router;
