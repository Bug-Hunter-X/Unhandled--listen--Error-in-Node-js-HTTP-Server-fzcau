# Unhandled 'listen' Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: neglecting to handle errors from `server.listen()`.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

The `server.listen()` method can throw errors if the port is already in use or there are other issues with binding to the specified address. Without proper error handling, these errors can cause the server to crash without informative messages.

## Solution

The solution involves adding an error listener to the server object using `server.on('error', ...)` to gracefully handle potential errors during the `listen` process.  This allows for more robust and reliable server operation.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js` to see the unhandled error.
4. Run `node bugSolution.js` to see the corrected, error-handled version.