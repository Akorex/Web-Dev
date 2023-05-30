const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleWare = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json(err.message)
    }
    return res.status(500).json({msg: "Something went wrong. Try again later"})
}

module.exports = errorHandlerMiddleWare