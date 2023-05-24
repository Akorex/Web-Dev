const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.end('Hello, World. Yam is better than rice and egg');
});

server.listen(port, () => {
    console.log(`Server listening on ${port}; Press Ctrl-c to terminate`);
});