const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");

router.get("/members/:id", function (req, res) {

  // db.sequelize.query(
  db.sequelize
    .query(
      "SELECT records.id, members.firstname, members.lastname, certs.certname, expiry FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id WHERE members.isactive = true AND members.id = " +
        req.params.id +
        " ORDER BY expiry;",
      { type: QueryTypes.SELECT }
    )
    .then(function (dbprofile) {
      res.json(dbprofile);
    });
});

module.exports = router;
