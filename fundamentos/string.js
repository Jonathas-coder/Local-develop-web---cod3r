/*FATIAMENTO DE STRINGS
*/
const escola = 'Jonathas'
console.log(escola.charAt(2)) // variavel.charAt: exibe o conteudo no indicie desejado ()
console.log(escola.charCodeAt(2)) //variavel.charCodeAT:  mostra o valor na tabela unicode
console.log(escola.indexOf('n')) // vairavel.indexOF: mostra o indicie doq estou procurando
console.log(escola.substring(2)) // variavel.substring(): exibe a string a partir do valor determinado
console.log(escola.substring(0,2))

console.log('O monstro: '.concat(escola).concat("!")) // .concat() é tipo o format só q pra string

console.log(escola.replace('s', 'n'))

console.log('famor,gansers,realmadrid'.split(',')) // vai dividr a string ARRAY, a partir do valor q eu definir .split()
 