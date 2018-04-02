const router = require("express").Router();
const path = require("path");
const index = path.resolve(__dirname, "..", "client", "build", "index.html");

router.get("/", (req, res) => {
  res.sendFile(index);
});

module.exports = router;
