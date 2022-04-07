const http = require('http'),
   url = require('url'),
   fs = require('fs'),
   mime = require('mime'),
   path = require('path')

const base = __dirname

http.createServer((req, res) => {
   pathname = path.normalize(base + req.url)
   console.log(pathname)

   fs.stat(pathname, (err, stats) => {
      if (err) {
         res.writeHead(404)
         res.write('Resource missing 404\n')
         res.end()
      } else if (stats.isFile()) {
         // Tipo do conteúdo
         let type = mime.getType(pathname) // O corrreto é mime.getType()
         console.log(type)
         res.setHeader('Content-Type', type)

         // Cria e redireciona o fluxo de leitura
         let file = fs.createReadStream(pathname)
         file.on("open", () => {
            // Status 200 - arquivo encontrado, sem erros
            res.statusCode = 200
            file.pipe(res)
         })

         file.on("error", (err) => {
            console.log(err)
            res.statusCode = 403
            res.write('file permission')
            res.end()
         })
      } else {
         res.writeHead(403)
         res.write('Directory acces is forbidden')
         res.end()
      }
   })
}).listen(8124)
console.log('Server running at 8124')
