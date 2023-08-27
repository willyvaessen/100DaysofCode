const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! This is a simple webserver on Node.js');
}).listen(8080);