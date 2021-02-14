const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/certs", function (req, res) {
  // findAll returns all entries for a table when used with no options
  db.Cert.findAll({}).then(function (dbCert) {
    // We have access to the certs as an argument inside of the callback function
    res.json(dbCert);
  });
});

module.exports = router;
