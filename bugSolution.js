const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  // ...
  res.end();
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port already in use. Please choose a different port.');
  } else {
    console.error('Server error:', err);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});