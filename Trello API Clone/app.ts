import express, {Application, Request, Response} from 'express'
import notFoundMiddleware from './middlewares/not-found'
import logger from './logger'

require('dotenv').config()

// setup
const app: Application = express()
const port = process.env.PORT || 3000

// routes
app.get('/', (req: Request, res: Response) => {
    res.send('<h1> Trello - a Project Management Platform </h1>')
})


// middlewares
app.use(notFoundMiddleware)
app.listen(port, () => {
    console.log(`Server started. Listening on http://localhost:${port}
                Press Ctrl-C to cancel.`)
})