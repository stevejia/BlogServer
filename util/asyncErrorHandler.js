const ReturnInfo = require("../models/returnInfo");
let wrap = fn=>(...args) => fn(...args).catch((err)=>{
    let errorMessage = err.message;
    let returnInfo = new ReturnInfo(errorMessage, false);
    let res = args[1];
    return res.send(returnInfo);
});
module.exports = exports = wrap;