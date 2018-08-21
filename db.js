var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017/MyBlog');
console.log("DB connected.");
var Schema = mongoose.Schema;
var userInfoSechema = new Schema({
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
const models = {
    Users: mongoose.model("Users", userInfoSechema)
}
module.exports = models;