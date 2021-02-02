const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require('sequelize');

router.get("/records", function (req, res) {
  console.log("heyyy record");

  // db.sequelize.query(
    db.sequelize.query(
"SELECT records.id, members.firstname, members.lastname, certs.certname, expiry FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id WHERE members.isactive = true ORDER BY expiry;",
// "SELECT records.id, members.firstname, members.lastname, certs.certname, expiry FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id WHERE members.isactive = true AND certs.certname = "+{certs.certname}+" ORDER BY expiry;",
{type: QueryTypes.SELECT})
    .then(function (dbrecord) {
    // console.log(dbrecord);

    res.json(dbrecord);
  });
});

module.exports = router;
