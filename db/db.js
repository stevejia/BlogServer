var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017/MyBlog');
console.log("DB connected.");
var Schema = mongoose.Schema;

const userInfoSchema = require("./userModel")
const articleSchema = require("./articleModel")

const articleTypeSchema = require("./articleTypeModel")
const blogTypeSchema = require("./blogTypeModel")

const models = {
    Users: mongoose.model("Users", userInfoSchema),
    Articles: mongoose.model("Articles", articleSchema),
    BlogTypes: mongoose.model("BlogTypes", blogTypeSchema),
    ArticleTypes: mongoose.model("ArticleTypes", articleTypeSchema)
}
module.exports = models;