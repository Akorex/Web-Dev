const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const handlers = require('./lib/handlers');
const multiparty = require('multiparty');
const cookieParser = require('cookie-parser');
const { credentials } = require('./config');
const expressSession = require('express-session');
const flashMiddleware = require('./lib/middleware/flash');
const weatherMiddleware = require('./lib/middleware/weather');
const nodemailer = require('nodemailer');

//const morgan = require('morgan');
//const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// some configs
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.disable('x-powered-by');
app.use(express.static(__dirname + '/public')); //static 

app.use(cookieParser(credentials.cookieSecret));
app.use(expressSession({resave: false, saveUninitialized: false, secret: credentials.cookieSecret}));
app.use(flashMiddleware);
app.use(weatherMiddleware);

app.use(bodyParser.urlencoded({extended: true})); // form handling
app.use(bodyParser.json()); //jsonify forms



// routes
app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/headers', (req, res) => {
    res.type('text/plain');
    const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key}: ${value}`);
    res.send(headers.join('\n'));
})

// handlers for browser-based form submission
app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thank-you', handlers.newletterSignupThankYou);

// handlers for JSON form submission
app.get('/newsletter-signup', handlers.newsletter);
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);

app.post('/contest/vacation-photo/:year/:month', (req, res) => {
    const form = new multiparty.Form()
    form.parse(req, (err, fields, files) => {
        if(err) return res.status(500).send({error: err.message})
        handlers.vacationPhotoContestProcess(req, res, fields, files)
    })
})

app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main == module) {
    app.listen(port, () => console.log(`Express started in ${app.get('env')} on http://localhost:${port}
                Press Ctrl-C to terminate`));
}
else {
    module.exports = app;
}