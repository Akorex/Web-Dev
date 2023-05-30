const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleWare = require('./middlewares/error-handler')
require('dotenv').config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleWare)

// starting the app
const port = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port http://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()