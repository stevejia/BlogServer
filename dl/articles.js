"use strict";
const dbUtil = require('../util/dbutil');

let articleRep = {
    save: async (data)=>{
        let result = await dbUtil.save("Articles", data);
        return result;
    },
    list: async (query)=>{
        let articles = await dbUtil.find("Articles", query);
        return articles;
    },
    get: async(query)=>{
        let article = await dbUtil.findOne("Articles", query);
        return article;
    }
}

module.exports = exports = articleRep;