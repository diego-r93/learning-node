const http = require('http')
const fs = require('fs')
const base = __dirname

http.createServer((req, res) => {
   pathname = base + req.url
   console.log(pathname)

   fs.stat(pathname, (err, stats) => {
      if (err) {
         console.log(err)
         res.writeHead(404)
         res.write('Resource missing 404\n')
         res.end()
      } else {
         res.setHeader('Content-Type', 'text/html')

         // Cria um fluxo de leitura e o redireciona
         let file = fs.createReadStream(pathname)

         file.on("open", () => {
            res.statusCode = 200
            file.pipe(res)
         })

         file.on("error", (err) => {
            console.log(err)
            res.writeHead(403)
            res.write('file missing or permission problem')
            res.end()
         })
      }
   })
}).listen(8124)

console.log('Server running at 8124');