import User from '../models/auth'
import {verify} from 'jsonwebtoken'
import { jwt_lifetime, jwt_secret } from "../config/config"
import { Request, Response, NextFunction } from 'express'
import ApiError from './errors/api-error'


// Define a custom interface to include the 'user' property
declare global {
    namespace Express {
      interface Request {
        user?: {
          userId: string;
          name: string;
        };
      }
    }
  }




export const isLoggedIn = async (req:Request, res: Response, next: NextFunction) => {
    // check header

    const authHeader = req.headers['authorization']

    if (!authHeader) {
        return next(ApiError.badRequest('Unauthorized'))
    }

    if (authHeader.startsWith('Bearer')){
        const token = authHeader.split(' ')[1]

        try{
            const payload: any = verify(token, jwt_secret)
            req.user  = {userId: payload.userId, name: payload.name}
            next()

        }catch(e){
            return next(ApiError.badRequest('Authentication failed'))
        }
    }else{
        return next(ApiError.badRequest('Invalid authorization header'))
    }
}