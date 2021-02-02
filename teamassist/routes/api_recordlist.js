const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/records", function (req, res) {
  console.log("heyyy record");
  // findAll returns all entries for a table when used with no options
  db.Record.findAll({
    // return this.connection.query(
// "SELECT record.id, members.firstname, members.lastname, certs.certname, expiry FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id ORDER BY expiry;")
// "SELECT record.id, expiry FROM records ORDER BY expiry;")
    }).then(function (dbrecord) {
    console.log(dbrecord);
    // We have access to the record as an argument inside of the callback function
    res.json(dbrecord);
  });
});

module.exports = router;
