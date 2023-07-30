const express = require('express')
const handlebars = require('express-handlebars')
const Router = require('./routes/routes')
require('dotenv').config()


// setup
const port = process.env.PORT || 3000
const app = express()

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.disable('x-powered-by')

// routes
app.use('/', Router)

app.use((req, res) => {
    res.send("<h1> Page Not Found </h1>")
})
app.listen(port, () => console.log(`Server started. Listening on http://localhost:${port}`))
