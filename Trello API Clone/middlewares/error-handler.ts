import {Request, Response, NextFunction} from 'express'
import { StatusCodes } from 'http-status-codes'
import logger from '../logger'

const errorMiddleWare = (error: any, req: Request, res: Response, next:NextFunction) => {
 
    try{
        if (error && error.error) {
            logger.error(`StatusCode:: ${StatusCodes.BAD_REQUEST}, Message:: ${error.error}`)
            res.status(StatusCodes.BAD_REQUEST).json(`${error.error}`)
        }

    }catch(error){
        next(error)
    }
}

export default errorMiddleWare