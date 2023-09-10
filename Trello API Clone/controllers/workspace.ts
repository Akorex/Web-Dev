import {Request, Response, NextFunction} from 'express'
import Workspace from '../models/workspace'
import {StatusCodes} from 'http-status-codes'
import ApiError from '../middlewares/errors/api-error'
import User from '../models/auth'

export const getAllWorkspaces = async (req: Request, res: Response) => {
    // returns all workspaces created by logged in user
    const workspaces = await Workspace.find({})
}


export const getWorkspace = async (req: Request, res: Response) => {

    // returns a specific workspace

}

export const createWorkspace = async (req: Request, res: Response) => {
    try{
        const {name, membersEmails, visibility} = req.body
        let createdBy = req.user?.userId

        // validate members 
        const memberIds = await User.find({ email: {$in: membersEmails}}).distinct('_id')

        // logged-in user who created the workspace is automatically a member
        memberIds.push(createdBy)

        // create the workspace
        const newWorkspace = await Workspace.create({
            name, 
            members: memberIds,
            createdBy,
            visibility
        })
        res.status(StatusCodes.CREATED).json({newWorkspace})

    }catch(e){
       return ApiError.internalError()
    }
}

