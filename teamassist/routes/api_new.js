const db = require("../models");
const express = require("express");
const router = express.Router();


  router.post('/new', async function(req, res, next) {
    // const newMember = await 
    db.sequelize.query('insert into members(firstname,lastname,email,dob,gender,iscommittee,iscoach) values("'+req.body.firstname+'","'+req.body.lastname+'","'+req.body.email+'","'+req.body.dob+'","'+req.body.gender+'","'+Number(req.body.iscommittee)+'","'+Number(req.body.iscoach)+'");');
    res.send(JSON.stringify(db.newMember));   
  });

  module.exports = router;




