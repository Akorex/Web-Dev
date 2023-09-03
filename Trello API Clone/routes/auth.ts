import {Router} from 'express'
import {register, login, forgotPassword} from '../controllers/auth'


const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/forgot-password', forgotPassword)

export default authRouter