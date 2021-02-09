const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/members", function(req, res) {
  console.log('heyyy member');
    // findAll returns all entries for a table when used with no options
    db.Member.findAll({}).then(function(dbMember) {
      // We have access to the members as an argument inside of the callback function
      res.json(dbMember);
    });
  });

  module.exports = router;

