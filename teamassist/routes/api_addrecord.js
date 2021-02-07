const db = require("../models");
const express = require("express");
const router = express.Router();


  router.post('/addrecord', async function(req, res, next) {
    const addRecord = await db.sequelize.query('insert into records(certname,expiry,member_id) values("'+req.body.certname+'","'+req.body.expiry+'",1);');
    res.send(JSON.stringify(db.addRecord));   
  });

  module.exports = router;




