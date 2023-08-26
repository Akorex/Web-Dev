import express, {Application, Request, Response} from 'express'
import notFoundMiddleware from './middlewares/not-found'
import logger from './logger'
import errorMiddleWare from './middlewares/error-handler'
import authRouter from './routes/auth'
import connectDB from './config/db'
import {config} from './config/config'
import 'dotenv/config'
import 'express-async-errors'


// setup
const app: Application = express()
const port = config.port

// routes
app.get('/', (req: Request, res: Response) => {
    res.send('<h1> Trello - a Project Management Platform </h1>')
})

app.use(`/api/v${config.apiVersion}/auth`,authRouter)
app.use(notFoundMiddleware)
app.use(errorMiddleWare)


// start

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
                console.log(`Server started. Listening on http://localhost:${port}
                            Press Ctrl-C to cancel.`)})
    }
     catch(err){
            logger.error(err)
    }
}



start()
