function tag (parte, ...outros){
    resultado = []
    outros.forEach((valor,indicie) =>{
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(parte[indicie],valor)
    })
    return resultado.join('')
}

const salario = 1500
const predicado =78

console.log(tag `Valores ${salario}, ${predicado}`)



console.log(isNaN('s'))