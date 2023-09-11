import {Request, Response, NextFunction} from 'express'
import Workspace from '../models/workspace'
import {StatusCodes} from 'http-status-codes'
import ApiError from '../middlewares/errors/api-error'
import User from '../models/auth'

export const getAllWorkspaces = async (req: Request, res: Response) => {

    try{
        // returns all workspaces created by logged in user
        const workspaces = await Workspace.find({createdBy: req.user?.userId}).sort('createdAt')

        if (workspaces && workspaces.length > 0){
            const formattedWorkspaces = workspaces.map(workspaces => ({
                name: workspaces.name,
                members: workspaces.members
            }))

            res.status(StatusCodes.OK).json({workspaces: formattedWorkspaces, count: workspaces.length})
        }else{
            res.status(StatusCodes.OK).json({workspaces: [], count: 0})
        }
    }catch(e){
        return ApiError.internalError()
    }
}


export const getWorkspace = async (req: Request, res: Response) => {

    // returns a specific workspace created by logged in user

    

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

