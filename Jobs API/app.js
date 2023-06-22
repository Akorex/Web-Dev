const express = require('express')
const notFoundMiddleWare = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')
const authenticateUser = require('./middlewares/authentication')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')
const connectDB = require('./db/connect')
require('dotenv').config()
require('express-async-errors')

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')


const app = express()
app.use(express.json())

app.set('trust proxy', 1)
app.use(
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );

app.use(helmet())
app.use(cors())
app.use(xss())

// routes
app.get('/', (req, res) => {
    res.send('<h1> JOBS API </h1> <a href="/api-docs/"> Documentation </a> ')
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)

// set ups
const port = process.env.PORT || 3000

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server started. Listening on http://localhost:${port}.
            Enter Ctrl-C to terminate`)
        })
    } catch(error) {
        console.log(error)
    }
}

start()