const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const handlers = require('./lib/handlers');
const multiparty = require('multiparty');


// configure Handlebars views engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.disable('x-powered-by');

//static 
app.use(express.static(__dirname + '/public'));

// form handling
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// handlers for browser-based form submission
app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thank-you', handlers.newletterSignupThankYou);

// handlers for JSON form submission
app.get('/newsletter', handlers.newsletter);
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);

app.post('/contest/vacation-photo/:year/:month', (req, res) => {
    const form = new multiparty.Form()
    form.parse(req, (err, fields, files) => {
        if(err) return res.status(500).send({error: err.message})
        handlers.vacationPhotoContestProcess(req, res, fields, files)
    })
})

// routes
app.get('/', handlers.home);
app.get('/about', handlers.about);

// custom error pages
app.use(handlers.notFound);
app.use(handlers.serverError);


if (require.main == module) {
    app.listen(port, () => console.log(`Express started on http://localhost:${port}
                Press Ctrl-C to terminate`));
}
else {
    module.exports = app;
}