const express = require('express')
const connectDB = require('./db/connect')
const router = require('./routes/user')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.use('/api/user', router)


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Express Server started on http://localhost:${port}.
                        Press Ctrl-C to terminate the app.`)
        })
    } catch(error){
        console.log(error)
    }
}

start()