const db = require("../models");
const passport = require("../config/passport");
const express = require("express");
const { Router } = require("express");
const router = express.Router();

router.get("/validate", function (req, res) {
  console.log(req.params.id);

  // db.sequelize.query(
    db.sequelize.query(


      "SELECT * FROM members WHERE isactive = 1 AND (iscommittee = 1 OR iscoach = 1) AND email = 'lukewilkinson@teamassist.com';",

      
"SELECT members.firstname, members.email, members.iscommittee, members.iscoach FROM members WHERE members.isactive = true AND members.id = " + req.params.id + " ORDER BY expiry;",
{type: QueryTypes.SELECT})
    .then(function (dbprofile) {

    res.json(dbprofile);
  });
});

module.exports = router;
