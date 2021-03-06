const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");

router.get("/fulltable", function (req, res) {
  console.log("Full table called");
  // findAll returns all entries for a table when used with no options
  db.sequelize
    .query(
      "SELECT * FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id ORDER BY members.lastname, members.firstname, expiry;",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbRecords) {
      // We have access to the members as an argument inside of the callback function
      res.json(dbRecords);
    });
});

module.exports = router;
