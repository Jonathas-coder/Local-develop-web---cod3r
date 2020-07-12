function result (valor){
    if (valor > 7 )
        console.log(valor)
    
        console.log('Final')
}
result(8)
//Js desconsidera identação.. sempre use blocos em estruturas de controle.

function chamar(valor){
    if (valor <= 5)
        ;
    {
        console.log(valor)
        console.log('reprovado seu merda.')
    }
}
chamar(7)
// nunca use ';', ela é uma sentença válida. Logo, o bloco em seguida será desconsiderado.
