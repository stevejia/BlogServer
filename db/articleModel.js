const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
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

module.exports = exports = articleSchema