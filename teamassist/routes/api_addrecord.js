const db = require("../models");
const express = require("express");
const router = express.Router();


  router.post('/addrecord', async function(req, res, next) {
    console.log(req.body.member_id);
    console.log(req.body.cert_id);
    console.log(req.body.expiry);
    // const newMember = await 
    db.sequelize.query('insert into records(cert_id,expiry,member_id) values('+req.body.cert_id+',"'+req.body.expiry+'",'+req.body.member_id+');');
    res.send(JSON.stringify(db.addRecord));   
  });

  module.exports = router;




