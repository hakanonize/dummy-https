'use strict';

// We’re setting up an extremely simple server here.
const http = require('http');

// These could (should) be set as env vars.
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// No matter what hits the server, we send the same thing.
http.createServer((req, res) => {

  // Tell the browser what’s coming.
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  // Send a simple message in HTML.
  res.write('<h1>I’m a Node app!</h1>');
  res.write('<p>And I’m <em>sooooo</em> secure.</p>');
  res.write(`<img src='./public/1.jpg'/> `)
  res.write(`<img src='./public/2.jpg'/> `)
  res.write(`<img src='./public/3.jpg'/> `)
  res.write(`<img src='./public/4.jpg'/> `)
  res.write(`<img src='./public/5.jpg'/> `)
  res.end();
}).listen(port, host);

// This message prints in the console when the app starts.
console.log(`App running at http://${host}:${port}`);