class ReturnInfo {
    constructor(data, message, status=false){
        this.message = message;
        this.status = !!message ? true : false;
        this.data = data;
    }
}

module.exports = exports = ReturnInfo;