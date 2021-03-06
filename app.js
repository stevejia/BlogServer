const api = require("./api");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const tokenUtil = require("./util/token");
var cors = require("cors");
const app = express();
// const middleWare = require("express-domain-middleware");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.get("*", function(req, res){
//     const html = fs.readFileSync(path.resolve(___dirname, "../"))
//Way1: use cors dependency and use(*, fun)method
app.options("*", cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //是否需要验证 登录 注册 相关的请求不需要验证。
    let needAuten = req.header('needAuten');
    if(needAuten === 'true'){
      let token = req.header('token');
      let tokenStatus = tokenUtil.checkToken(token);
      if(!tokenStatus){
        return res.sendStatus(401);
      }else{
        let info = tokenUtil.decodeToken(token);
        let userName = info.payload.data;
        let newToken = tokenUtil.createToken(userName, 120);
      }
      if (req.method === 'OPTIONS') {
        return res.send(200)
      } else {
        next();
      }
    }else{
      next();
    }
    
  });

// });
//Way2： allow custom header and CORS
// app.all('/*',function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'access-control-allow-methods,access-control-allow-origin,content-type,x-powered-by');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
//     if (req.method == 'OPTIONS') {
//       res.send(200); /让options请求快速返回/
//     }
//     else {
//       next();
//     }
//   });
app.use(api);
app.listen(8088);