const saudaçao= 'eai' // contexto léxico 1


console.log(saudaçao)
function i (){
    const saudaçao =  'opa'
    return saudaçao                 //contexto léxico 2 

}
console.log(i())

const pessoas = {
    nome:'jonathas',                        //um objeto é uma constante aninhada
    peso:'sessenta',
    endereço:{logadour:'Alto do sossego',
rua:59 }

}
console.log(pessoas)