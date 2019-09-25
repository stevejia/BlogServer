const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleTypeSchema = new Schema({
    text: String,//显示文本
    value: Number//值
},{
    collection: "ArticleTypes"
});
module.exports = exports = articleTypeSchema