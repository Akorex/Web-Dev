const express = require('express')
const notFoundMiddleWare = require('./middlewares/not-found')
const errorMiddleWare = require('./middlewares/error-handler')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
require('dotenv').config()
require('express-async-errors')

// some setups
const port = process.env.PORT || 8080
const app = express()
app.use(express.json)

// routes

app.get('/', (req, res) => {
    res.send("<h1> The Store Project </h1>")
})


// product routes
app.use('/api/v1/products', productsRouter)

// middlewares
app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

// start

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}. 
                        Press Ctrl-C to terminate`)
        })

    } catch(error) {
        console.log(error)
    }
}

start()