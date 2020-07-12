function MeuObjeto () {}

const p1 = new MeuObjeto

MeuObjeto.prototype.nome = 'John'       //<-------- FAZENDO HERANÇA 

MeuObjeto.prototype.falar = function (){
    return console.log(`Meu nome é ${this.nome}`)
}
let p2 = new MeuObjeto

p2.__proto__.nome = 'Ana'

p2.falar()
// ocasiões verdadeira, protos iguais
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

//ocasiões falsas
console.log(MeuObjeto.__proto__ === Function.prototype.__proto__)//note que o proto do objeto é diferente do function

//PARA PASSAR HERANÇA ATRAVÉS DA FUNÇÃO CONSTRUTORA É PRECISO UTILIZAR O PROTOTYPE DA FUNÇÃO
