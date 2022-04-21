const zlib = require('zlib')
const program = require('commander')
const fs = require('fs')

program
  .version('0.0.1')
  .option('-s, --source [file name]', 'Source File Name')
  .option('-f, --file [file name]', 'Destination File name')
  .option('-t, --type <mode>', '/^(gzip|deflate)$/i')
  .parse(process.argv)

let compress;
if (program.type == 'deflate')
  compress = zlib.createDeflate()
else 
  compress = zlib.createGzip()

let inp = fs.createReadStream(program.source)
let out = fs.createWriteStream(program.file)

inp.pipe(compress).pipe(out)