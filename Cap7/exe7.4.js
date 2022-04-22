const net = require('net')
const client = new net.Socket()
client.setEncoding('utf-8')

// conecta ao servidor
client.connect('/tmp/learning.sock', function() {
  console.log('connected to server')
  client.write('Who needs a browser to communicate?')
})

// ao receber dados, reenviá-los ao servidor
process.stdin.on('data', function(data) {
  client.write(data)
})

// ao receber os dados devolvidos, enviá-los ao console
client.on('data', function(data) {
  console.log(data)
})

// quando o servidor fechar a conexão
client.on('close', function() {
  console.log('connection is closed')
})