import { Router } from "express"
import authRouter from "./auth"
import boardsRouter from "./boards"
import workspaceRouter from "./workspace"
import { isLoggedIn } from "../middlewares/authentication"

const router = Router()


router.use('/auth', authRouter)
router.use('/boards', isLoggedIn, boardsRouter)
router.use('/workspace', isLoggedIn, workspaceRouter)


export default router