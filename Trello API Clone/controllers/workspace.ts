import {Request, Response, NextFunction} from 'express'
import Workspace from '../models/workspace'
import {StatusCodes} from 'http-status-codes'
import ApiError from '../middlewares/errors/api-error'

export const getAllWorkspaces = async (req: Request, res: Response) => {
    const workspaces = await Workspace.find({})
}


export const getWorkspace = async (req: Request, res: Response) => {

}

export const createWorkspace = async (req: Request, res: Response) => {

    res.json(req.user)
    //try{
        // have to be a user & logged in to create a workspace
      //  req.body.members = req.user?.userId

        //const newWorkspace = await Workspace.create(req.body)
        //res.status(StatusCodes.CREATED).json({newWorkspace})

    //}catch(e){
      //  return ApiError.internalError()
    //}
}

