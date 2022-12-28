const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {

    //normalize url
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png', 'image/png');
            break;
        default:
            serveStaticFile(res, 'public/404.html', 'text/html', 404);
            break;
    }

});


function serveStaticFile(res, path, contentType, responseCode = 200){
    fs.readFile(__dirname + path, (err, data) => {
        if (err) return fileError(err, res);
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
    })
}

//functions to handle errors
function fileError(err, res){
    console.error(err);
    res.end('500 - Internal Error');
}

function serverError(err, res){
    console.error(err);
    res.end('Server Error');
}

server.listen(port, () => console.log(`server started on ${port}. Ctrl-C to terminate`));