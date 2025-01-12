const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  // ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Unexpected error handling

// ...some code...

//Missing Error Handling for server.listen()

server.on('error', (err) => {
  console.error('Server error:', err);
});