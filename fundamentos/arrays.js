const teste = [5.4, 85, 9, 4] // um array é tipo list
console.log(teste)
teste.push('asasas')// push parece com append
console.log(teste)
const len = teste.length  // tamando da array                variavel.length
console.log('O arrya len tem: ' + len + (' elementos.'))
const c = teste.pop() // APAGA O INDICIE E TUDO QUE ESTIVER NELE
console.log(teste)
delete teste [0]    // remove o conteudo na memoria, mas mantem a posição o indicie vivo
console.log(teste) 
teste[0]= 'ADD'    // substitui um valor na posição desejada
console.log(teste)
teste[0]='TESTE'
console.log(teste)