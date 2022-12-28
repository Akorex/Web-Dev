const http = require('http');
const fs = require('fs');
const { format } = require('path');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    getTitles(res);
});

// function to get titles from titles.json
function getTitles(res){
    fs.readFile('./titles.json', (err, data) => {
        if (err) return hadError(err, res);
        getTemplate(JSON.parse(data.toString()), res);
    });
}

// function to handle errors
function hadError(err, res){
    console.error(err);
    res.end('Server Error');
}

//function to get templates.html
function getTemplate(title, res){
    fs.readFile('./templates.html', (err, data) => {
        if (err) return hadError(err, res);
        formatHtml(title, data.toString(), res);
    });
}

function formatHtml(title, tmpl, res){
    const html = tmpl.replace('%', title.join('</li><li>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}

server.listen(port, ()=> console.log(`Server started on ${port}. Ctrl-C to terminate`));