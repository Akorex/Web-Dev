import {Request, Response, NextFunction} from 'express'
import Boards from '../models/boards'
import ApiError from '../middlewares/errors/api-error'
import { StatusCodes } from 'http-status-codes'


export const getBoard = async (req: Request, res: Response) => {
    // returns a specific board in a particular workspace created by logged-in user

    try{
        const workspaceparam = req.query.workspace
        const boardsId = req.params.id


        const board = await Boards.findOne({_id: boardsId, workspace: workspaceparam})

        if (board){

            res
            .status(StatusCodes.OK)
            .json({board: {name: board.name, content: board.content, status: board.status}})
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message: 'That board is not found'})
        }

    }catch(e){
        return ApiError.internalError()
    }
    
}

export const getAllBoards = async (req: Request, res: Response) => {
    // returns all the boards in a particular workspace created by logged-in user

    try{
        const workspaceparam = req.query.workspace

        const boards = await Boards.find({workspace: workspaceparam}).sort('createdAt')

        if (boards && boards.length > 0){

            const formattedBoards = boards.map(boards => ({
                name: boards.name,
                content: boards.content,
                status: boards.status}))


            res.status(StatusCodes.OK).json({boards: formattedBoards, count: boards.length})
        }

    }catch(e){
        return ApiError.internalError()
    }
}




export const createBoard = async (req: Request, res: Response) => {
    try{
        const {name, content, status, workspace} = req.body

        const newBoard = await Boards.create({
            name,
            content,
            status,
            workspace
        })

        res.status(StatusCodes.OK).json({board: {name:newBoard.name, content: newBoard.content, status: status}})

    }catch(e){
        return ApiError.internalError()
    }
}

export const updateBoard = async (req: Request, res: Response) => {

}