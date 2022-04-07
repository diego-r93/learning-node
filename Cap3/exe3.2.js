let util = require('util')
let eventEmitter = require('events').EventEmitter
let fs = require('fs')

function InputChecker(name, file) {
   this.name = name
   this.writeStream = fs.createWriteStream('./' + file + '.txt',
      {
         'flags': 'a',
         'encoding': 'utf8',
         'mode': 0o666
      })
}

util.inherits(InputChecker, eventEmitter)
InputChecker.prototype.check = function (input) {
   let command = input.toString().trim().substr(0, 3)
   if (command == 'wr:') {
      this.emit('write', input.substr(3, input.lenght))
   } else if (command == 'en:') {
      this.emit('end')
   } else {
      this.emit('echo', input)
   }
}