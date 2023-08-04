const BaseError = require("./baseError");

class Validation extends BaseError{
    constructor(specificMessage){
        super("Validation Error",403,specificMessage)
    }
}

module.exports = Validation