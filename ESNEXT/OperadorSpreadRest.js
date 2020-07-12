//Operador rest junta todos os atributos na função
//Operador spread espalha os atributos dentro do objeto//array
//               ...     <--- este é o operador.
const p = {
    nome:'John',altura:45,salario:6546546
}
const clone = {ativo:true, ...p}
console.log(clone)

const listaA = ['John','luana','laura']
const ListaB = ['Rafaela',...listaA,'Reeves']
console.log(ListaB)
//Testando Spread a partir de uma função!
const spreadd = (lista) =>{
    const clone = [...lista]
    return clone
}
const Clonando = spreadd(ListaB)
console.log(Clonando)

//Rest
function rest (...array){
    const final = array
    return final
}
console.log(rest(2,465,7,98,79,84,654,65,4).sort(function (a,b){return a-b}))