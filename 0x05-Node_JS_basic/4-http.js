const http = require('http');

http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
