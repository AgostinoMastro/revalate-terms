const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Default to index.html for root path
  if (pathname === '/') {
    pathname = '/home.html';
  }
  
  // Get the file path
  const filePath = path.join(__dirname, pathname);
  
  // Get file extension
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  // Read the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // File not found - serve 404.html
      fs.readFile(path.join(__dirname, '404.html'), (err404, data404) => {
        if (err404) {
          // Even 404.html not found - send basic 404
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 - Page Not Found</h1>');
        } else {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(data404);
        }
      });
    } else {
      // File found - serve it
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Custom 404 page will be served for non-existent routes`);
}); 