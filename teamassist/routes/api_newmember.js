const db = require("../models");
const express = require("express");
const router = express.Router();

router.post('/newmember', function(req, res, next) {
  res.locals.connection.query('insert into members(firstname,lastname,email,dob,gender,iscommittee,iscoach) values(''Test'',''McTest'',''test@test.com'',''1980-01-01'',''M'',''false'',''false'')', 
   function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

  module.exports = router;




