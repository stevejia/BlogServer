"use strict";
const models = require('../db');
const dbUtil = require('../dbutil');

let articleRep = {
    save: async (data)=>{
        let result = await dbUtil.save("Articles", data);
        return result;
    },
    list: async (query)=>{
        let articles = await dbUtil.find("Articles", query);
        return articles;
    }
}

module.exports = exports = articleRep;