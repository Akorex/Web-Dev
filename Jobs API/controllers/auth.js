const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')

const register = async (req, res) => {
    const {name, email, password} = req.body

    // check for existing user
    const existingUser = await User.findOne({email})
    if (existingUser){
        return res.status(400).json({message: "User already exists. Log in instead"})
    }

    const user = await User.create({...req.body})
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({user: {name: user.name}, token})
}

const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password){
        throw new BadRequestError("Please provide email and password")
    }

    const user = await User.findOne({email})
    if (!user){
        throw new UnauthenticatedError("Invalid Credentials")
    }
    
    const isPasswordCorrect = await user.comparePassword(password)

    if (!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: {name: user.name}, token})

}

module.exports = {
    register,
    login
}