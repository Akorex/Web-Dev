import {Request, Response, NextFunction} from 'express'
import User from '../models/auth'
import { StatusCodes } from 'http-status-codes'

export const register = async (req: Request, res: Response) => {

    // if manual signup
    const {name, email, password} = req.body

    const existingUser = await User.findOne({email})
    if (existingUser){
        res.status(StatusCodes.BAD_REQUEST).json({message: "User already exists. Log in instead"})
    }

    const newUser = await User.create({...req.body})

    res.status(StatusCodes.CREATED).json({user: {name: newUser.name}, })
}

export const login = async (req: Request, res: Response) => {

}

