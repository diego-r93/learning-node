const fs = require('fs')
const util = require('util')

fs.stat('./phoenix5a.png', (err, stats) => {
   if (err) {
      console.log(err)
   }
   console.log(util.inspect(stats))
})