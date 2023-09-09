import {Request, Response, NextFunction} from 'express'
import User from '../models/auth'
import { StatusCodes } from 'http-status-codes'
import { 
    generateHashedValue,
    createAccessToken,
    checkValidity,
    generateRandomToken } from '../utils/auth'
import ApiError from '../middlewares/errors/api-error'
import {resetTokenExpiresIn} from '../config/config'
import logger from '../logger'


export const register = async (req: Request, res: Response) => {

    // if manual signup
    const {name, email, password, passwordResetToken, passwordResetExpires} = req.body

    const existingUser = await User.findOne({email})
    if (existingUser){
        res.status(StatusCodes.BAD_REQUEST).json({message: "User already exists. Log in instead"})
    }

    const newUser = await User.create(
        {
            name,
            email,
            password: generateHashedValue(password),
            passwordResetToken,
            passwordResetExpires
        })

    const token = createAccessToken(newUser._id)

    res.status(StatusCodes.CREATED).json({user: {name: newUser.name}, token})
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body

    if (!email || !password){
        return next(ApiError.badRequest("Please enter your email and password."))
    }

    const user = await User.findOne({email})
    if (!user){
        return next(ApiError.badRequest("This user does not exist."))
    }

    // check if the password is correct
    if (!checkValidity(password, user.password)){
        return next(ApiError.badRequest("Your email/password is not correct."))
    }

    const token = createAccessToken(user._id)

    res.status(StatusCodes.OK).json({user: {name: user.name}, token})

}

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {

    try{
        const {email} = req.body
        
        // generate random token 
        const resetToken = generateRandomToken()
        
        // check if user exists
        const user = await User.findOneAndUpdate({email}, 
            {
                passwordResetToken: resetToken,
                passwordResetExpires: new Date(Date.now() + resetTokenExpiresIn * 10000) 
                .toISOString()
            })


        if (!user){
            return next(ApiError.badRequest("This user does not exist in the database."))
        }

        // To DO - send email to the user with a token to reset the password
        // add publish Email functionality
        // allows user to reach the resetPassword endpoint


    }catch(err) {
        next(err)
    }

}

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {

    try{
        //logger.info("START: Reset Password")
        const {password, passwordResetToken} = req.body

        const user = await User.findOneAndUpdate({
            passwordResetToken: passwordResetToken, 
            passwordResetExpires: { $gte: new Date().toISOString() }

        },
        {
            password: generateHashedValue(password),
            passwordChangedAt: new Date(), 
            passwordResetToken: null, 
            passwordResetExpires: null 

        }).lean()

        if (!user){
            return next(ApiError.badRequest("Invalid/ Expired password token"))
        }

        res.status(StatusCodes.OK).json({message: "Password reset successful. Please log in with the new password"})

    }catch(err){
        next(err)
    }

}