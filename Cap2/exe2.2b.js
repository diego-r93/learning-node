let StringDecoder = require('string_decoder').StringDecoder
let decoder = new StringDecoder('utf8')

let euro = new Buffer.from([0xE2, 0x82])
let euro2 = new Buffer.from([0xAC])

console.log(decoder.write(euro))
console.log(decoder.write(euro2))

console.log(euro.toString())
console.log(euro2.toString())

let buf = new Buffer.alloc(3)
buf.write('€', 'utf-8')

console.log(buf.length)
console.log(buf)