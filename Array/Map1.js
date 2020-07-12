const nums = [1,2,3,4,5,6]
const exibir = _ => _* 30
const dolar = _ => `R$ ${parseFloat(_).toFixed(2).replace('.',',')}`
const result = nums.map(exibir).map(dolar)
console.log(result) //map cria um novo array a partir do método que eu determinar.

