const fs = require('fs'),
   async = require('async')

async.waterfall([
   function readData(callback) {
      fs.readFile('./data/data1.txt', 'utf8', (err, data) => {
         callback(err, data)
      })
   },

   function modify(text, callback) {
      let adjdata = text.replace(/somecompany\.com/g, 'burningbird.net')
      callback(null, adjdata)
   },

   function writeData(text, callback) {
      fs.writeFile('./data/data1.txt', text, (err) => {
         callback(err, text)
      })
   }
])