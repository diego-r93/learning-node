const http = require('http')

const server = http.createServer()
console.log('create server')

server.on('request', (request, response) => {
   console.log('request event')

   response.writeHead(200, { 'Content-Type': 'text/plain' })
   response.end('Hello World\n');
})

server.on('connection', () => console.log('Connection event'))

server.listen(8124, () => console.log('listening event...'))

console.log('Server running at http://127.0.0.1:8124/')