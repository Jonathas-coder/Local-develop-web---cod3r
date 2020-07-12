//Arrow function 
const soma = (a,b) => a+b
console.log(soma(1,2))

const lexico = () => console.log(this === exports)
const lexico2 = lexico.bind({})
lexico()
lexico2()

//parametros default

function log (texto= 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

//OPERADOR REST 
function rest  (...numeros){
    let final = 0
    numeros.forEach(_ => final += _)
    return final
}
console.log(rest (1,4,5))
//OPERADOR REST É UMA FUNÇÃO QUE RECEBE VÁRIOS PARAMETROS DE UM ARRAY E AGRUPA TUDO NUMA VARIAVEL DENTRO DA FUNÇÃO.
