let buf1 = new Buffer.from('this is the way we build our buffer')
let lnth = buf1.length

// Cria um novo buffer como uma fatia do antigo
let buf2 = buf1.slice(19, lnth)
console.log(buf2.toString())

// Modifica o segundo buffer
buf2.fill('*', 0, 5)
console.log(buf2.toString())

// Mostra impacto no primeiro buffer
console.log(buf1.toString())

if (buf1.equals(buf2))
   console.log('buffers are equal')

let buf3 = new Buffer.from('this is a new buffer with a string')

// Copia o buffer
let buf4 = new Buffer.alloc(10)
buf3.copy(buf4)

console.log(buf4.toString())

// Comparando buffers
let buf5 = new Buffer.from('1 is number one')
let buf6 = new Buffer.from('2 is number two')

let buf7 = new Buffer.alloc(buf5.length)
buf5.copy(buf7)

console.log(buf5.compare(buf6))
console.log(buf6.compare(buf5))
console.log(buf5.compare(buf7))