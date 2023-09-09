import { Router } from "express"
import { getBoard } from "../controllers/boards"

const boardsRouter = Router()

boardsRouter.route('/:id').get(getBoard)

export default boardsRouter