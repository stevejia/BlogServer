var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017/MyBlog');
console.log("DB connected.");
var Schema = mongoose.Schema;
var userInfoSchema = new Schema({
    name: String,
    password: String,
    userid: Number,
    realName: String,
    email: String,
    mobile: String,
    school: String,
    region: String,
    city: String,
    remark: String
},{
    collection: "Users"
});

var articleSchema = new Schema({
    title: String,//标题
    content: String,//内容
    classify: String,//分类
    tag: String,//文章标签
    articleType: Number,//文章类型
    blogType: Number,//博客类型
    isPrivate: Boolean,//是否私密
    isDeleted: Boolean,//是否删除
    isDraft: Boolean,//是否草稿,
    articleId: Number,//文章Id,
    creatorId: Number,//创建人Id,

    readCount: Number,//阅读量
    createTime: Date,//创建时间
    isTop: Boolean,//是否置顶,
    commentCount: Number,//评论数
},{
    collection: "Articles"
});


var articleTypeSchema = new Schema({
    text: String,//显示文本
    value: Number//值
},{
    collection: "ArticleTypes"
});

var blogTypeSchema = new Schema({
    text: String,//显示文本
    value: Number,//值
    router: String,//路由
},{
    collection: "BlogTypes"
});

const models = {
    Users: mongoose.model("Users", userInfoSchema),
    Articles: mongoose.model("Articles", articleSchema),
    BlogTypes: mongoose.model("BlogTypes", blogTypeSchema),
    ArticleTypes: mongoose.model("ArticleTypes", articleTypeSchema)
}
module.exports = models;