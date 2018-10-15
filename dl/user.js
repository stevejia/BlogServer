"use strict";
const dbUtil = require('../util/dbutil');

let userRep = {
    login: async (query)=>{
        let types = await dbUtil.findOne("Users", query);
        return types;
    },
}

module.exports = exports = userRep;