const peso = 23
const peso2 = Number('24.5')
//somando valores
const total= (peso + peso2) / 2
//exibindo valores
console.log('A média entre os pesos é ', total)
console.log('A variavel peso é inteiro: ',Number.isInteger(peso))
console.log('')
console.log('A variavel peso2 é inteiro: ', Number.isInteger(peso2))
/*Number.isInteger(variavel) para saber se é int
*/
console.log('')
//diminuindo casas decimais
console.log('Diminuindo a casa decimal')
console.log(total.toFixed(1)) // não altera o valor a constant
/*variavel.toFixed(1) diminui casas decimais
*/
console.log('')
console.log('Transformado variavel total em string')
console.log(total.toString()) // não altera a tipagem da constante
/*variavel.toString()   TRANSFORMA A VARIAVEL EM STRING
*/
console.log(Number.isInteger(total))
/*variavel.toString(2) se tiver um valor dentro do parentese, vira binario.
*/
console.log('')
console.log('valor binario')
console.log(total.toString(2)) // apenas imprime em binario, não altera o tipo da variavel.

// mostrando o tipo da constante
console.log(typeof total)

