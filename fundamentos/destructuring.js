const obj = {
    nome:'Jonathas',
    peso:'45',
    endereço:{
        logadouro:'R. Alto do sossego',
        numero:'59'
    }
}
console.log(obj)
let {nome:n,peso:p}= obj
console.log(n,p)
const {endereço:{logadouro:l,numero:n2}} = obj
console.log(l,n2)


// posso pegar qualquer item dentro do objeto usando o método: tipagem {item} = variavel


