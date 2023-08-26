import {Request, Response, NextFunction} from 'express'
import User from '../models/auth'
import { StatusCodes } from 'http-status-codes'
import { 
    generateHashedValue,
    createAccessToken,
    checkValidity } from '../utils/auth'

export const register = async (req: Request, res: Response) => {

    // if manual signup
    const {name, email, password} = req.body

    const existingUser = await User.findOne({email})
    if (existingUser){
        res.status(StatusCodes.BAD_REQUEST).json({message: "User already exists. Log in instead"})
    }

    const newUser = await User.create(
        {
            name,
            email,
            password: generateHashedValue(password)
        })

    const token = createAccessToken(newUser._id)

    res.status(StatusCodes.CREATED).json({user: {name: newUser.name}, token})
}

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body

    if (!email || !password){
        throw new Error("Please provide email and password")
    }

    const user = await User.findOne({email})
    if (!user){
        throw new Error('Invalid Credentials')
    }

    // check if the password is correct
    if (!checkValidity(password, user.password)){
        throw new Error('password is not correct')
    }

    const token = createAccessToken(user._id)

    res.status(StatusCodes.OK).json({user: {name: user.name}, token})

}

