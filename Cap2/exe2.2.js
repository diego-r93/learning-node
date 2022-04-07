let buf = Buffer.from('This is my pretty example')
let json = JSON.stringify(buf)

console.log(json)

let buf2 = Buffer.from(JSON.parse(json).data)

console.log(buf2.toString('ascii'))