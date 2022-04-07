const fs = require('fs')
const writeStream = fs.createWriteStream('./log.txt',
   {
      'flags': 'a',
      'encoding': 'utf8',
      'mode': 0666
   })

writeStream.on('open', () => {
   let counter = 0
   // Obtém lista de arquivos
   fs.readdir('./data/', (err, files) => {
      // Para cada arquivo
      if (err) {
         console.error(err.message)
      } else {
         files.forEach((name) => {
            fs.stat('./data/' + name, (err, stats) => {
               if (err) { return err }
               if (!stats.isFile()) {
                  counter++
                  return
               }
               // Modifica o conteúdo
               fs.readFile('./data/' + name, 'utf8', (err, data) => {
                  if (err) {
                     console.error(err.message)
                  } else {
                     let adjData = data.replace(/somecompany\.com/g,
                        'burningbird.net')

                     // Grava no arquivo
                     fs.writeFile('./data/' + name, adjData, (err) => {
                        if (err) {
                           console.error(err.message)
                        } else {
                           // Grava no log
                           writeStream.write('changed ' + name + '\n',
                              'utf8', (err) => {
                                 if (err) {
                                    console.error(err.message)
                                 } else {
                                    console.log(`finished ${name}`)
                                    counter++
                                    if (counter >= files.length) {
                                       console.log('all done')
                                    }
                                 }
                              })
                        }
                     })
                  }
               })
            })
         })
      }
   })
})
