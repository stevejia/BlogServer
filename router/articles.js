const express = require('express');
const router = express.Router();
const ReturnInfo = require("../models/returnInfo");
const articlesManager = require('../bl/articles');
const wrap = require('../util/asyncErrorHandler');

router.post('/save', wrap(async (req, res)=>{
    let data = req.body;
    let result = await articlesManager.save(data);
    res.send(result);
}));
router.get('/list',  wrap(async (req, res)=>{
    let query = req.body.query;
    let result = await articlesManager.list(query);
    res.send(result);
}));

router.get('/get',  wrap(async (req, res)=>{
    let id = req.body.id;
    let result = await articlesManager.get(id);
    res.send(result);
}));

module.exports = exports = router;
