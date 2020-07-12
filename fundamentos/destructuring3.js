/*const aleatorio = Math.random()
let mat3 = aleatorio * 4
const mat4 = Math.floor(mat3)
console.log('resultado da multiplicação: ',mat3,'...pegando o número inteiro:',mat4,'....o número aleatorio',aleatorio)
               //       Math.random() só gera números float
*/



// A FUNÇÃO SERVE PRA DESTRUTURAR, TIRAR VALORES DA CHAVE DENTRO DO OBJETO
function rand ({min=0, max = 1000}){        
    let valor = Math.random() * (max - min ) + min 
    return Math.floor(valor)
}  
const test = {min: 4,max: 15} //fazendo objeto com as keys min e max 
// a função vai funcionar pq ela encontra dentro do objeto as chaves min e max 
console.log(rand(test))


// NO EXEMPLO ABAIXO A FUNÇÃO RAND NÃO ENCONTRA AS CHAVES MIN E MAX, QUE ESTÃO NO PARAMETRO DA FUNÇÃO..GERANDO APENAS VALORES PADRÕES

const fruit = {cor: 0 , tamanho:45}

console.log(rand(fruit))
