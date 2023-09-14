import { Router } from "express"
import { createBoard, deleteBoard, getAllBoards, getBoard, updateBoard } from "../controllers/boards"

const boardsRouter = Router()


boardsRouter.route('/').post(createBoard).get(getAllBoards)
boardsRouter.route('/:id').get(getBoard).delete(deleteBoard).patch(updateBoard)

export default boardsRouter