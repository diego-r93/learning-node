const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('message', function(msg, rinfo) {
  console.log('Message: ', msg + ' from ' + rinfo.address + ':' + rinfo.port)
})

server.bind(8124)