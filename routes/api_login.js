const db = require("../models");
const passport = require("../config/passport");
const express = require("express");
const { Router } = require("express");
const router = express.Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json("TRUE");
});

router.get("/logout", (req, res) => {
  res.redirect("/login");
});

router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      password: req.user.password,
      id: req.user.id,
    });
  }
});

module.exports = router;
