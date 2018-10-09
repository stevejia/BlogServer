"use strict";
const models = require('../db');
const dbUtil = require('../dbutil');

let systemRep = {
    listArticleType: async (query)=>{
        let types = await dbUtil.find("ArticleTypes", query);
        return types;
    },
    listBlogType: async (query)=>{
        let types = await dbUtil.find("BlogTypes", query);
        return types;
    }
}

module.exports = exports = systemRep;