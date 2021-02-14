const db = require("../models");
const passport = require("../config/passport");
const express = require("express");
const { Router } = require("express");
const router = express.Router();
var bcrypt = require("bcryptjs");

router.post("/register", function (req, res) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  // db.sequelize.query(
  db.sequelize
    .query(
      "INSERT INTO users (email, password) VALUES ('" +
        req.body.email +
        "','" +
        hash +
        "');"

      // "SELECT members.firstname, members.email, members.iscommittee, members.iscoach FROM members WHERE members.isactive = true AND members.id = " + req.params.id + " ORDER BY expiry;",
    )
    .then(function (dbprofile) {
      res.json(dbprofile);
    });
});

module.exports = router;
