console.log(7/0) // resultado infinito
console.log(20 + 4)
console.log('20'+ 4) // ele não soma o literal, sim a string

console.log(5 + (48.465).toFixed(2) ) // novamente somando o valor string, sem considerar o operador
console.log(5 + 48.465) // considerando o operador

const total = 5 + 48.465
console.log(total.toFixed(1)) // Foi necessario criar uma variavel para usar o metodo toFixed, toFixed tb aproxima o numero


console.log('10' / 2)
console.log('10' * 2)
console.log('10' **2)
console.log('10' + 2) // não serve para adição
