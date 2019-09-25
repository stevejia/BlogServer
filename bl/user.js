const userRep = require("../dl/user");
let ReturnInfo = require("../models/returnInfo");
const userManager = {
    login: async(loginModel)=>{
        let userInfo = await userRep.login(loginModel);
        if(!userInfo){
            let message = "用户名或密码不正确！";
            throw new Error(message);
        }
        return userInfo;
    },
    list: async (query)=>{
        let list = await userRep.list(query); 
        return list;
    },
    get: async (id)=>{
        let query = {id};
        let article = await userRep.get(query);
        return article;
    },
    async save(userInfo){
        await userRep.save(userInfo);
        return new ReturnInfo("");
    }
}
module.exports = exports = userManager;