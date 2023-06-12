const {statusCodes} = require('http-status-codes')
const CustomAPIError = require('./custom-api')

class NotFoundError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCodes = statusCodes.NOT_FOUND
    }
}

module.exports = NotFoundError