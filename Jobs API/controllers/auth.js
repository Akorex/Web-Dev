const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res) => {
    //const {name, email, password} = req.body
    const user = await User.create({...req.body})

    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res) => {

}

module.exports = {
    register,
    login
}