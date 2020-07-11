const express = require('express');
const app = express();
const http = require('http');
const hostname = '127.0.0.1';
//const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World rohit\n');
});

const port = process.env.PORT || 1338;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
