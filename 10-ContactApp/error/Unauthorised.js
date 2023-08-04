const BaseError = require("./baseError");

class Unauthorised extends BaseError{
    constructor(specificMessage){
        super("Unauthorised access",401,specificMessage)
    }
}

module.exports = Unauthorised