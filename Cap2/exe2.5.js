let fib = function (n) {
   if (n < 2) return n;

   return fib(n - 1) + fib(n - 2)
}

let Obj = function () { }

Obj.prototype.doSomething = function (arg1_) {
   let callback_ = arguments[arguments.length - 1]
   callback = (typeof (callback_) == 'function' ? callback_ : null)
   let arg1 = typeof arg1_ === 'number' ? arg1_ : null

   if (!arg1)
      return callback(new Error('first arg missing or not a number'))

   process.nextTick(function () {
      // Bloqueia a CPU
      let data = fib(arg1)
      callback(null, data);
   })
}

let test = new Obj()
let number = 10

test.doSomething(number, (err, value) => {
   if (err)
      console.log(err)
   else
      console.log(`fibonacci value for ${number} is ${value}`)
})

console.log('called doSomething')