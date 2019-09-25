const articleRep = require("../dl/articles");

const articleManager = {
    save: async(data)=>{
        let article = data.article;
        if(!article.articleId){
            let articles = await articleRep.list(null);
            let id = articles.length + 1;
            article.articleId = id;
        }
        let result = await articleRep.save(article);
        return result;
    },
    list: async(query)=>{
        let list = await articleRep.list(query); 
        return list;
    },
    get: async (id)=>{
        let query = {id};
        let article = await articleRep.get(query);
        return article;
    }
}
module.exports = exports = articleManager;