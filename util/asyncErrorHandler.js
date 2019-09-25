const ReturnInfo = require("../models/returnInfo");
let wrap = fn => (...args) =>
  fn(...args).catch(err => {
    // debugger;
    let errorMessage = err.message || "系统错误，请联系管理员！";
    // let returnInfo = new ReturnInfo(errorMessage, false);
    let res = args[1];
    var response = err.response || {};
    var status = response.status || 500;
    return res.sendStatus(status).send(errorMessage);
  });
module.exports = exports = wrap;
