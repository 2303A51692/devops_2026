// import http module
const http = require('http');
// create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});
// define port
const PORT = 7000;
// start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});