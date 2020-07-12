// o result será exibido porque var é global, fora de função.
var a = 'teste'
console.log(a)
// o result não será mostrado porque VAR esta dentro de uma função, não é global
function f (a,b){
    var a2 = a,b
}
f('testando',' Javascript')



{
    {
        {
            {
                {
                    var a = 'Estrutura linda do crlh'
                }
            }
        }
    }
}
console.log(a)
// mesmo estando em varios blocos, o escopo nao impede em nada na var ser mostrada