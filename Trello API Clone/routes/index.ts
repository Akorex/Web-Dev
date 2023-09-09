import { Router } from "express"
import authRouter from "./auth"
import boardsRouter from "./boards"
import workspaceRouter from "./workspace"

const router = Router()


router.use('/auth', authRouter)
router.use('/boards', boardsRouter)
router.use('/workspace', workspaceRouter)


export default router