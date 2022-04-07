process.stdin.setEncoding('utf8')
process.stdin.on('readable', function () {
   var input = process.stdin.read()

   if (input !== null) {
      // ecoa o texto de entrada para a saída
      process.stdout.write(input)

      var command = input.trim()

      if (command == 'exit')
         process.exit(0)
   }
})
