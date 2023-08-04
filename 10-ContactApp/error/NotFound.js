const BaseError = require("./baseError");

class NotFound extends BaseError{
    constructor(specificmessage){
        super("File not found",404,specificmessage)
    }
}

module.exports = NotFound