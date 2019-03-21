console.log('hello world');

const http = require('http');

http
  .createServer((req, res) => {
    res.end('Hello World');
    // process.exit(1);
  })
  .listen(8080);
