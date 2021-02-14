const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");

router.get("/updatemember/:id", function (req, res) {

  // db.sequelize.query(
  db.sequelize
    .query(
      "SELECT members.id, members.firstname, members.lastname, email, dob, gender, iscommittee, iscoach, isactive FROM members WHERE id = " +
        req.params.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmember) {
      res.json(dbmember);
    });
});

module.exports = router;

router.patch("/updatemember/firstname/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET firstname = '" +
        req.body.firstname +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;

router.patch("/updatemember/lastname/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET lastname = '" +
        req.body.lastname +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;

router.patch("/updatemember/email/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET email = '" +
        req.body.email +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;

router.patch("/updatemember/dob/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET dob = '" +
        req.body.dob +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;

router.patch("/updatemember/gender/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET gender = '" +
        req.body.gender +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;

router.patch("/updatemember/iscommittee/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET iscommittee = '" +
        Number(req.body.iscommittee) +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;

router.patch("/updatemember/iscoach/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET iscoach = '" +
        Number(req.body.iscoach) +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;

router.patch("/updatemember/isactive/:id", function (req, res) {

  db.sequelize
    .query(
      "UPDATE members SET isactive = '" +
        Number(req.body.isactive) +
        "' WHERE id = " +
        req.body.id +
        ";",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbmembers) {
      res.json(dbmembers);
    });
});
module.exports = router;
