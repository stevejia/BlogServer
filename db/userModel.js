const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
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

module.exports = exports = userInfoSchema