const Q=require('q');
const models = require('./db');
var deffered = Q.defer();
const returnInfo = {
    data: null,
    message: null
}
var dbUtil = {
    find: async function(collection, queryParams){
        let list = [];
        await models[collection].find(queryParams, (mst, lst)=>{
            list = lst;
        });
        return list;
    },
    save: async function(collection, data){
        var newItem = new models[collection](data);
        await newItem.save((err,data) => {
            if (err) {
                returnInfo.message = err; 
            }
        });
        return returnInfo;
    },
};
module.exports = exports = dbUtil;