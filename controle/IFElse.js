function escola (valor){
    if (Number.isInteger(valor)){
        if (valor >= 7){
            console.log('Aprovado')
        }
        else{
            console.log('Reprovado')
        }
    }
    else{
        console.log('Digite um número inteiro animal.')
    }
}

escola('epa')
//SEMPRE VERIFIQUE SE O VALOR É INTEIRO, PORQUE O JS VAI LER STRING COMO RESULTADO FALSO, RESPONDENDO COM ELSE.