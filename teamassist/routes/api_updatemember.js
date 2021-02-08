const db = require("../models");
const express = require("express");
const router = express.Router();
const { QueryTypes } = require('sequelize');

router.get("/updatemember/:id", function (req, res) {
  console.log("GET " + req.params.id);


  // db.sequelize.query(
    db.sequelize.query(
"SELECT members.id, members.firstname, members.lastname, certs.certname, expiry FROM records LEFT JOIN members ON records.member_id = members.id JOIN certs ON records.cert_id = certs.id WHERE members.isactive = true AND records.id = " + req.params.id + ";",
{type: QueryTypes.SELECT})
    .then(function (dbmember) {

    res.json(dbmember);
  });
});

module.exports = router;

// router.patch("/updaterecord/:id", function (req, res) {
//   console.log("PATCH " + req.body.id);
//   console.log("PATCH " + req.body.expiry);

// db.sequelize.query(
//   "UPDATE records SET expiry = '" + req.body.expiry + "' WHERE id = " + req.body.id + ";",
//   {type: QueryTypes.SELECT})
//       .then(function (dbrecords) {
  
//       res.json(dbrecords);
//     });
//   });


// module.exports = router;
