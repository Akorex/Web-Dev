const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')
const bcrypt = require('bcryptjs')


const register = async (req, res) => {
    const {name, email, password} = req.body

    // check for existing user
    const existingUser = await User.findOne({email})
    if (existingUser){
        return res.status(400).json({message: "User already exists. Log in instead"})
    }

    const user = await User.create({...req.body})

    res.status(StatusCodes.CREATED).json({user: {name: user.name}})
}

const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password){
        throw BadRequestError("Please provide email and password")
    }

    const user = await User.findOne({email})
}

module.exports = {
    register,
    login
}