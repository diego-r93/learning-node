const fs = require('fs')
const path = require('path')

fs.readdir ('./',function(err, files) {
   for (let file of files) {
      console.log(file)
      if (path.extname(file) == '.gz') {
         fs.unlink('./' + file)
      }
   }
})

console.log(process.env.path)
console.log(process.env.path.split(path.delimiter))