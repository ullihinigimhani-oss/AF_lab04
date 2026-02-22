// const fs = require('fs');

// fs.writeFile('file.txt', 'Hello World!', function (err) {
//   if (err) throw err;
//   console.log('File saved!');
// });

// const http = require('http');

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('Hello World!');
//   res.end();
// });

// server.listen(3000, function () {
//   console.log('Server running at http://localhost:3000');
// });

const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});
