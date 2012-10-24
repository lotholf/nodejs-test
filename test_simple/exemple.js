var http = require('http');
var GLOBAL = {};
GLOBAL.index = 0;

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('Send "Hello World"');
  response.end('Hello World '+ (GLOBAL.index++) +'\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');