let eventEmitter = require('events').EventEmitter
let counter = 0
let counter2 = 0
let em = new eventEmitter()

setInterval(() => {
   em.emit('timed', counter++)
}, 3000)

setInterval(() => {
   em.emit('myTimed', counter2 += 2)
}, 2000)

em.on('timed', data => {
   console.log('timed ' + data)
})

em.on('myTimed', data => {
   console.log('my time ' + data)
})