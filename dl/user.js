"use strict";
const dbUtil = require('../util/dbutil');

let userRep = {
    login: async (query)=>{
        let types = await dbUtil.findOne("Users", query);
        return types;
    },
    async save (userInfo) {
        await dbUtil.save("Users", userInfo);
    },
    async list(query){
        await dbUtil.find("Users", query);
    }
}

module.exports = exports = userRep;