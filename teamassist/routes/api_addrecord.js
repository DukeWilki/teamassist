const db = require("../models");
const express = require("express");
const router = express.Router();


  router.post('/addrecord', async function(req, res, next) {
    console.log(req.params.id);
    console.log(req.body.cert_id);
    console.log(req.body.expiry);
    const addRecord = await db.sequelize.query('insert into records(cert_id,expiry,member_id) values("'+req.body.cert_id+'","'+req.body.expiry+'",1);');
    res.send(JSON.stringify(db.addRecord));   
  });

  module.exports = router;




