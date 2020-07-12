Number.prototype.entre = function (inicio, fim ){
    return this >= inicio && this <= fim
}
const printResult = function (valor){
    if (valor.entre(9,10) ){
        console.log('Quadro de honra')
    }else if (valor.entre(7,8.99)){
        console.log('Aprovado')
    } else if (valor.entre(5,6.99)){
        console.log('Recuperação')
    } else if (valor.entre(2,3.99)){
        console.log('Reprovado')
    }else{
        console.log('Digite uma nota válida')
    }
}
printResult(11)
printResult(8)