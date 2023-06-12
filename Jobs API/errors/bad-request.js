const {statusCodes} = require('http-status-codes')
const CustomAPIError = require('./custom-api')

class BadRequestError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCodes = statusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError