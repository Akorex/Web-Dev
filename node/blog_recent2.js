const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    getTitles(res);
})

//function to read pull titles from titles.json
function getTitles(res){
    fs.readFile('./titles.json', (err, data) => {
        if (err){
            hadError(err, res);
        }
        else{
            getTemplate(JSON.parse(data.toString()), res);
        }
    });
}

//function to handle what happens with error
function hadError(err, res){
    console.error(err);
    res.end('Server Error');
}

//function to get the templates.html
function getTemplate(title, res){
    fs.readFile('./templates.html', (err, data) => {
        if (err){
            hadError(err, res);
        }
        else{
            formatHtml(title, data.toString(), res);
        }
    });
}

function formatHtml(title, tmpl, res){
    const html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}

server.listen(port, () => console.log(`Server started on ${port}. Ctrl-C to terminate`));