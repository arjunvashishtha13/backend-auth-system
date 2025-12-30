const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({
    message: "Signup route hit",
    body: req.body
  });
});

module.exports = router;
 