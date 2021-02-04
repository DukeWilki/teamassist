const db = require("../models");
const express = require("express");
const router = express.Router();


  router.post('/newrecord', function(req, res, next) {
    res.locals.connection.query('insert into records(member_id,cert_id,expiry) values(''+req.body.member_id+'',''+req.body.cert_id+'',''+req.body.expiry+'')', 
     function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
  });

  module.exports = router;




