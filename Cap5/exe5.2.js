const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({
   'msg': 'Hello World!'
})

const options = {
   hostname: 'localhost',
   port: 8124,
   method: 'POST',
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
   }
}

let req = http.request(options, (res) => {
   console.log('STATUS: ' + res.statusCode)
   console.log('HEADERS: ' + JSON.stringify(res.headers))
   res.setEncoding('utf8')

   // Obtém lascas de dados
   res.on('data', (chunck) => {
      console.log('BODY: ' + chunck)
   })

   // Encerra a resposta
   res.on('end', () => {
      console.log('No more data in response.')
   })
})

req.on('error', (e) => {
   console.log('problem with request: ' + e.message)
})

// Grava dados no corpo da solicitação
req.write(postData)
req.end()