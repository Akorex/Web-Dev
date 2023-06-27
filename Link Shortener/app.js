const express = require('express')
const connectDB = require('./db/connect')
require('dotenv').config()


// setup
const app = express()
const port = process.env.PORT || 3000


// routes
app.get(['/', '/home'], (req, res) => {
    res.send('<h1> Link Shortener Service </h1>')
})

// middlewares

app.use(express.json())



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> console.log(`Server started. Listening on http://localhost:${port}`))
    } catch(error){
        console.log(error)
    }
}


start()