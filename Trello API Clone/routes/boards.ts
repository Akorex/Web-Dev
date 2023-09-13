import { Router } from "express"
import { createBoard, getAllBoards, getBoard } from "../controllers/boards"

const boardsRouter = Router()


boardsRouter.route('/').post(createBoard).get(getAllBoards)
boardsRouter.route('/:id').get(getBoard)

export default boardsRouter