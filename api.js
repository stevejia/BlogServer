"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();
const tokenGen = require('./token');

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    
    models.UserInfo.find({},function(mst,users){
        var number = users.length ? ++users.length : 1;
        var newAccount = new models.UserInfo({
            name : "Steve Jia",
            password : "jx19910209",
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
    // 保存数据newAccount数据进mongoDB
    // newAccount.save((err,data) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send('createAccount successed');
    //     }
    // });
});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    models.UserInfo.find({userid: 1},(err, data)=>{
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
    // 通过模型去查找数据库
    // models.Login.find((err,data) => {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(data);
    //     }
    // });
});
router.get('/api/article/getCommends', (req, res)=>{
    res.send({test: 'articles'});

});

router.post('/api/account/login', (req, res)=>{
    let loginInfo = req.body;
    let isSuccesed = false;
    console.log(loginInfo);
    models.Users.find(loginInfo,(err, users)=>{
        console.log(users);
        isSuccesed = !!users.length;
        if(isSuccesed){
            let token = tokenGen.createToken(loginInfo.name, 120);
            let data = {token: token};
            res.send(data);
        }else{
            res.send({message: "用户名或密码不正确"});
        }
    });    
})

router.post('/api/account/register', (req, res)=>{
    console.log(req, req.body);
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

router.post('/api/basicdata/save', (req, res)=>{
    console.log(req.body);
    let data = req.body;
    let articleTypes = data.articleTypes;

    models.ArticleTypes.find({}, (mst, types)=>{
        if(types.length === 0){
            console.log(true);
            models.ArticleTypes.insertMany(articleTypes);
        }
    });

    let blogTypes = data.blogTypes;
    models.BlogTypes.find({}, (mst, types)=>{
        if(types.length === 0){
            console.log(true);
            models.BlogTypes.insertMany(blogTypes);
        }
    });
});
router.get('/api/commondata/get', (req, res)=>{
    let articleTypes = [];
    let blogTypes = [];
    models.ArticleTypes.find({}, (mst, types)=>{
        articleTypes = types;
        models.BlogTypes.find({}, (mst, types)=>{
            blogTypes = types;
            var commonData = {
                articleTypes: articleTypes,
                blogTypes: blogTypes
            }
            res.send({commonData});
        });
    });
});

module.exports = router;