const router = require("express").Router();

router.post("/", (req, res) => {
  res.json({ message: "Logout handler" });
});

module.exports = router;
