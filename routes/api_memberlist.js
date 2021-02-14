const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");

router.get("/members", function (req, res) {
  // findAll returns all entries for a table when used with no options
  db.sequelize
    .query(
      "SELECT id, firstname, lastname FROM members WHERE members.isactive = true ORDER BY firstname;",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbMember) {
      // We have access to the members as an argument inside of the callback function
      res.json(dbMember);
    });
});

module.exports = router;
