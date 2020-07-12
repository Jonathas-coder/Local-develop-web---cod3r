const ferrari = new Object
ferrari.modelo = 'f40'
ferrari.vmax = 324

const fusca = {}
Object.assign(fusca, ferrari)

console.log(ferrari.__proto__)
console.log (Object.prototype === ferrari.__proto__)
