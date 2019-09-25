const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogTypeSchema = new Schema({
    text: String,//显示文本
    value: Number,//值
    router: String,//路由
},{
    collection: "BlogTypes"
});
module.exports = exports = blogTypeSchema