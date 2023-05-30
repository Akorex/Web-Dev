const http = require('http');
const fs = require('fs');
const port = 9000;

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        fs.readFile('./titles.json', (err, data) => {
            if (err){
                console.error(err);
                res.end('Server Error');
            }
            else {
                const titles = JSON.parse(data.toString());
                fs.readFile('./templates.html', (err, data) => {
                    if (err){
                        console.error(err);
                        res.end('Server Error');
                    }
                    else{
                        const tmpl = data.toString();
                        const html = tmpl.replace('%', titles.join('</li><li>'));
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(html);
                    }
                });
            }
        });
    }
});

server.listen(port, () => console.log(`server started on http://localhost:${port}. Ctrl-C to terminate`));