const express = require('express');
const router = express.Router();
const wrap = require('../util/asyncErrorHandler');
const ReturnInfo = require("../models/returnInfo");
const userManager = require('../bl/user');
const tokenGen = require('../util/token');
router.post('/register', (req, res)=>{
    let userInfo = req.body;
    models.Users.find({}, (mst,users) => {
        var number = users.length ? ++users.length : 1;
        var newAccount = new models.Users({
            name : userInfo.name,
            password : userInfo.password,
            userid: number
        });
        newAccount.save((err,data) => {
            if (err) {
                res.send(err);
            } else {
                res.send('createAccount successed');
            }
        });
    })
});

router.post('/login', wrap(async (req, res)=>{
    let loginInfo = req.body;
    let userInfo = await userManager.login(loginInfo);
    console.log(userInfo)
    let isSuccesed = !!userInfo;
    if(isSuccesed){
        let token = tokenGen.createToken(loginInfo.name, 120);
        let data = {token: token};
        res.send(data);
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
