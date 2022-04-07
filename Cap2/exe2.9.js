const fs = require('fs')
fs.readFile('./apples.txt', 'utf8', (err, data) => {
   if (err) {
      console.log(err)
   } else {
      let adjData = data.replace(/[A|a]pple/g, 'orange')

      fs.writeFile('./oranges.txt', adjData, (err) => {
         if (err) {
            console.error(err)
         }
      })
   }
})