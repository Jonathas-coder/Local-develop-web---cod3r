function soNoticiaBoa(n1){
    if (n1 >= 7 ){
        console.log('Aprovado com', +n1)
    }
}
soNoticiaBoa(4.8)
soNoticiaBoa(8)
function Tratarerror(erro){
    throw 'Valor FALSO'
}
function seforverdade(valor){
    if (valor){
        console.log('É verdade... ' + valor)
    } 
}
seforverdade(null)

