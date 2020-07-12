let list = [4,5,8,7,9,8,5,4,5,6,12]


let max = list.reduce((a,b) => Math.max(a,b)) //armazenar = variavel.reduce( (a,b) => Math.max ou min (a,b))
console.log(max)

let min = list.reduce((a,b) => Math.min(a,b))
console.log(min)

function entre (maior, menor){
    let test = Math.random() * (maior-menor) + menor
    return console.log(Math.ceil(test))
}
entre(10,5)
//Math.random() gera numeros aleatorio, Math.ceil() arredendo pra cima Math.floor() pra baixo.

console.log(Math.sign(-5)) // se o retorno for -1 então o valor é negativo, se +1 então positivo. 

console.log(Math.round(51.5),'. Agora decimal menor que 0,5: ', Math.round(51.4)) 