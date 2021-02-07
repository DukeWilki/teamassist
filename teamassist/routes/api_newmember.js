const db = require("../models");
const express = require("express");
const router = express.Router();

// router.post("/newmember", function(req, res) {
//   console.log('heyyy POST new member');
//     // findAll returns all entries for a table when used with no options
//     db.NewMember.create({
//       person_id: req.body.person_id,
//       disease_id: req.body.disease_id,
//       protected: req.body.protected,
//     }).then(function(dbNewMember) {
//       // We have access to the members as an argument inside of the callback function
//       res.json(dbNewMember);
//     });
//   });


router.post('/newmember', function(req, res, next) {
  res.locals.connection.query('insert into members(firstname,lastname,email,dob,gender,iscommittee,iscoach) values(''Test'',''McTest'',''test@test.com'',''1980-01-01'',''M'',''false'',''false'')', 
   function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

// router.post('/newmember', function(req, res, next) {
//   res.locals.connection.query('insert into members(firstname,lastname,email,dob,gender,iscommittee,iscoach) values(''+req.body.firstname+'',''+req.body.lastname+'',''+req.body.email+'',''+req.body.dob+'',''+req.body.gender+'',''+req.body.iscommittee+'',''+req.body.iscoach+'')', 
//    function (error, results, fields) {
//       if(error) throw error;
//       res.send(JSON.stringify(results));
//   });
// });

  module.exports = router;




