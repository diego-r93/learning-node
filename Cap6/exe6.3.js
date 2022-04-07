const fs = require('fs')

const readable = fs.createReadStream('./working.txt')
   .setEncoding('utf8')

let data = ''
readable.on('data', (chunk) => {
   data += chunk
})

readable.on('end', () => {
   console.log(data)
})