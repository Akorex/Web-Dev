const express = require('express')
const handlebars = require('express-handlebars')
const {homePage, birdsPage, petsPage, tumorsPage, translatePage} = require('./lib/handlers')



// some configs
app = express()

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

const port = 8000;



// routes
app.get(['/', '/home'], homePage)
app.get('/birds-species', birdsPage)
app.get('/pets', petsPage)
app.get('/tumors', tumorsPage)
app.get('/translate', translatePage)



// middlewares

app.use(express.static('./public'))

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('Page not Found')
})


// start the server

app.listen(port, () => {
    console.log(`Express app started in ${app.get('env')} on http://localhost:${port}.
                    Press Ctrl-C to cancel`)
})