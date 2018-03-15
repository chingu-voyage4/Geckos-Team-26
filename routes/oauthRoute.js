const router = require("express").Router();

router.post("/google", (req, res) => {
  const data = {
    accessToken: req.body.accesstoken,
    user: {
      email: req.body.email,
      imgUrl: req.body.imgurl,
      name: req.body.name
    }
  };

  // Check database

  res.json({ message: "payload sent to backend", data });
});

module.exports = router;
