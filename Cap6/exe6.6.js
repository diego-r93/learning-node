const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/javascript',
    'Content-Encoding': 'gzip,deflate'
  }
};

const req = http.request(options, function (res) {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', function (chunk) {
    data += chunk;
  });


  res.on('end', function () {
    console.log(data)
  })

});

req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
});

// envia para o servidor o arquivo compactado em gzip
let readable = fs.createReadStream('./test.png');
readable.pipe(gzip).pipe(req);
