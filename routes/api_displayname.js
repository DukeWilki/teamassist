const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");

router.get("/displayname/:id", function (req, res) {
  console.log("displayname API called");
  console.log("GET " + req.params.id);
  // db.sequelize.query(
  db.sequelize
    .query(
      "SELECT members.firstname, members.lastname FROM members WHERE id = " +
        req.params.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmember) {
      res.json(dbmember);
    });
});

router.get("/displaycert/:id", function (req, res) {
  console.log("displaycert API called");
  console.log("GET " + req.params.id);
  // db.sequelize.query(
  db.sequelize
    .query(
      "SELECT certs.certname FROM certs WHERE id = " +
        req.params.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmember) {
      res.json(dbmember);
    });
});

module.exports = router;
