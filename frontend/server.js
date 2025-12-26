const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const API_URL = process.env.API_URL || 'http://localhost:3000';

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
  .replace(/\{\{API_URL\}\}/g, API_URL);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
  console.log(`API URL configured as: ${API_URL}`);
});
