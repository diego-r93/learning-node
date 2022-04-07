const fs = require('fs'),
   async = require('async'),
   _dir = './data/'

const writeStream = fs.createWriteStream('./log.txt',
   {
      'flags': 'a',
      'encoding': 'utf8',
      'mode': 0666
   })

fs.readdir(_dir, (err, files) => {
   files.forEach((file) => {
      processItem(file)
   })
})

function processItem(file) {
   async.waterfall([
      function checkFile(callback) {
         fs.stat(_dir + file, (err, stats) => {
            callback(err, stats, file)
         })
      },
      function readData(stats, file, callback) {
         if (stats.isFile())
            fs.readFile(_dir + file, 'utf8', (err, data) => {
               callback(err, file, data)
            })
      },
      function modify(file, text, callback) {
         let adjdata = text.replace(/somecompany\.com/g, 'burningbird.net')
         callback(null, file, adjdata)
      },
      function writeData(file, text, callback) {
         fs.writeFile(_dir + file, text, (err) => {
            callback(err, file)
         })
      },
      function logChange(file, callback) {
         writeStream.write(`changed ${file}\n`, 'utf8', (err) => {
            callback(err)
         })
      }
   ], (err) => {
      if (err)
         console.log(err)
   })
}
writeStream.write('\n')
