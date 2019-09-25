const systemRep = require("../dl/system");
let ReturnInfo = require("../models/returnInfo");
const systemManager = {
    getCommonData: async()=>{
        let articleTypes = await systemRep.listArticleType({});
        let blogTypes = await systemRep.listBlogType({});
        let commonData = {
            articleTypes: articleTypes,
            blogTypes: blogTypes
        };
        return new ReturnInfo(commonData);
    }
}
module.exports = exports = systemManager;