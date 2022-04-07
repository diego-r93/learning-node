let buf = new Buffer.alloc(4)

// Escreve os valores no buffer
buf.writeUInt8(0x63, 0)
buf.writeUInt8(0x61, 1)
buf.writeUInt8(0x74, 2)
buf.writeUInt8(0x73, 3)

// Mostra o buffer em formato string
console.log(buf.toString())

// Usando formado parecido com array
let buf2 = new Buffer.alloc(4)

buf2[0] = 0x63
buf2[1] = 0x61
buf2[2] = 0x74
buf2[3] = 0x73

console.log(buf2.toString())