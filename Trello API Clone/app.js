const express = require('express')
const notFoundMiddleware = require('./middlewares/not-found')
require('dotenv').config()

// setup
const app = express()
port = process.env.PORT || 3000

// routes
app.get('/', (req, res) => {
    res.send('<h1> Trello - a Project Management Platform </h1>')
})


// middlewares
app.use(notFoundMiddleware)
app.listen(port, () => {
    console.log(`Server started. Listening on http://localhost:${port}
                Press Ctrl-C to cancel.`)
})