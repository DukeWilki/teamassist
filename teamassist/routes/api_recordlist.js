const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require('sequelize');

router.get("/certs/:id", function (req, res) {
  console.log(req.params.id);

  // db.sequelize.query(
    db.sequelize.query(
"SELECT records.id, members.firstname, members.lastname, certs.certname, expiry FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id WHERE certs.id = " + req.params.id + " ORDER BY expiry;",
{type: QueryTypes.SELECT})
    .then(function (dbrecord) {

    res.json(dbrecord);
  });
});

module.exports = router;
