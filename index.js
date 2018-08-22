var http = require('http');

var port = process.env.PORT || 8080;

const name = process.env.NAME || "OpenShift";

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(`Hello ${name}!\n`);
}).listen(port);

console.log("Server running on port " + port);
