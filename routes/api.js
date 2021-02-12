const express = require("express");
const passport = require("../config/passport");
const router = express.Router();
const db = require("../models");
// const { Router } = require("express");

router.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

// router.get("/api/test", (req, res) => {
//     console.log("it works!");
//     res.send("it works!")

// })

// router.post("/login", (req, res) => {
//   console.log('this should not be called')
//   res.json({
//     email: req.body.email,
//     password: req.body.password,
//     test: 'test',
//     // id: req.body.id,
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/login");
// });

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
