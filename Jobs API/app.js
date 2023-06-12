const express = require('express')
const notFoundMiddleWare = require('./middlewares/not-found')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')
require('dotenv').config()
require('express-async-errors')

const app = express()
app.use(express.json())

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)




// set ups
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server started. Listening on http://localhost:${port}.
                Enter Ctrl-C to terminate`)
})