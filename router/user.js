const express = require('express');
const router = express.Router();
const wrap = require('../util/asyncErrorHandler');
const ReturnInfo = require("../models/returnInfo");
const userManager = require('../bl/user');
const tokenGen = require('../util/token');
router.post('/register', wrap(async(req, res)=>{
    let userInfo = req.body;
    let existUsers = await userManager.list({});
    let userId = existUsers && existUsers.length ? ++existUsers.length : 1;
    userInfo.userid = userId;
    let returnInfo = await userManager.save(userInfo);
    res.send(returnInfo);
}));

router.post('/login', wrap(async (req, res)=>{
    let loginInfo = req.body;
    let userInfo = await userManager.login(loginInfo);
    console.log(userInfo)
    let isSuccesed = !!userInfo;
    if(isSuccesed){
        let token = tokenGen.createToken(loginInfo.name, 120);
        let result = new ReturnInfo({token});
        res.send(result);
    }
}));

// 获取已有账号接口
router.get('/get',(req,res) => {
    models.UserInfo.find({userid: 1},(err, data)=>{
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = exports = router;
