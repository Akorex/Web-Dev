import { Request, Response, NextFunction } from 'express'
import ApiError from './errors/api-error'
import { isTokenValid } from '../utils/auth'


// Define a custom interface to include the 'user' property
declare global {
    namespace Express {
      interface Request {
        user?: {
          userId: string;
          name?: string;
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
            const payload: any = isTokenValid(token)
            req.user  = {userId: payload.id}
            next()

        }catch(e){
            return next(ApiError.badRequest('Authentication failed'))
        }
    }else{
        return next(ApiError.badRequest('Invalid authorization header'))
    }
}