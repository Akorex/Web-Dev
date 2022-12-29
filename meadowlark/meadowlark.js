const express = require('express');
const expressHandlebars = require('express-handlebars');


const app = express();
const port = process.env.PORT || 3000;

const handlers = require('./lib/handlers');


// configure Handlebars views engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

//static 
app.use(express.static(__dirname + '/public'));

// routes
app.get('/', handlers.home);
app.get('/about', handlers.about);

// custom error pages
app.use(handlers.notFound);
app.use(handlers.serverError);

app.disable('x-powered-by');

if (require.main == module) {
    app.listen(port, () => console.log(`Express started on http://localhost:${port}
                Press Ctrl-C to terminate`));
}
else {
    module.exports = app;
}