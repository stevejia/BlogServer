const express = require('express');
const router = express.Router();
const systemManager = require('../bl/system');
const wrap = require('../util/asyncErrorHandler');
router.get('/getcommondata', wrap(async (req, res, next)=>{
    let returnInfo = await systemManager.getCommonData();
    res.send(returnInfo);
}));

module.exports = exports = router;
