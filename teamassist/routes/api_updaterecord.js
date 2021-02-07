const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require('sequelize');

router.get("/updaterecord/:id", function (req, res) {
  console.log(req.params.id);

  // db.sequelize.query(
    db.sequelize.query(
"SELECT records.id, members.firstname, members.lastname, certs.certname, expiry FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id WHERE members.isactive = true AND records.id = " + req.params.id + ";",
{type: QueryTypes.SELECT})
    .then(function (dbrecords) {

    res.json(dbrecords);
  });
});

module.exports = router;