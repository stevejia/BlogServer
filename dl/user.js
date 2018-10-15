"use strict";
const models = require('../db');
const dbUtil = require('../dbutil');

let userRep = {
    login: async (query)=>{
        let types = await dbUtil.findOne("Users", query);
        return types;
    },
}

module.exports = exports = userRep;