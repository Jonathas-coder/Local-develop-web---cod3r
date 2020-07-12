abc = 123 // variavel feita sem tipagem lançada no global. PROIBIDO FAZER DESTA FORMA.
console.log(global.abc)

const b = 'test'
console.log(module.exports.b) // undefined porque a viravel não esta no global... esta armazenada na memoria interna.
console.log(module.exports === this)

global.b2 = 'testando'
console.log(global.b2)

console.log(this === global)
