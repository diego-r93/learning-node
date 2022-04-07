const http = require('http')
const querystring = require('querystring')

const server = http.createServer().listen(8124)

server.on('request', (request, response) => {
   if (request.method == 'POST') {
      let body = ''

      // Adiciona a lasca de dados (data chunk) ao final do corpo da página
      request.on('data', (data) => {
         body += data
      })
      // Transmite os dados
      request.on('end', () => {
         let post = querystring.parse(body)
         console.log(post)
         response.writeHead(200, { 'Content-Type': 'text/plain' })
         response.end('Hello World\n')
      })
   }
})
console.log('server linstening on 8124')