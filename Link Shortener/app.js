const express = require('express')
const connectDB = require('./db/connect')
const linkRouter = require('./routes/links')
require('dotenv').config()


// setup
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


// routes
app.get(['/', '/home'], (req, res) => {
    res.send('<h1> Link Shortener Service </h1>')
})

app.use('/api/shortener', linkRouter)



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> console.log(`Server started. Listening on http://localhost:${port}`))
    } catch(error){
        console.log(error)
    }
}


start()