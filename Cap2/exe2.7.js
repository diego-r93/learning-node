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

InputChecker.prototype.check = function check(input) {
   // Elimina excesso de espaços em branco
   let command = input.trim().substr(0, 3)
   // Processa os possíveis comandos
   // Se for wr: grava os dados no arquivo
   if (command == 'wr:') {
      this.emit('write', input.substr(3, input.lenght))
      // Se for en: encerra o processo
   } else if (command == 'en:') {
      this.emit('end')
      // Ecoa a entrada na saída padrão caso não haja comandos
   } else {
      this.emit('echo', input)
   }
}

// Testa o novo objeto e o tratamento dos eventos
let ic = new InputChecker('Shelley', 'output')

ic.on('write', function (data) {
   this.writeStream.write(data, 'utf8')
})

ic.on('echo', (data) => {
   process.stdout.write(`${ic.name} wrote ${data}`)
})

ic.on('end', () => {
   process.exit()
})

// Captura a entrada depois de definir a codificação de texto
process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
   let input = process.stdin.read()
   if (input !== null)
      ic.check(input)
})