//Object em js
const produto = new Object
produto.tipo = 'MAZZA'
console.log(produto)

//função literal
const carro = {
    nome:'A4'
}
console.log(carro)
//função construtora

const pessoa = function (peso,altura){
    this.peso = peso
    this.IMC =function (){
        return console.log((peso*altura)/2)
    }
}
let f1 = new pessoa (70,1.75)
f1.IMC()

//função factory
const modelo = function (nome,idade,estado) { //factory cria objetos ilimitados com o mesmo parametro.
    return {
        nome,
        idade,
        estado,
        show(){
            return console.log(`${nome} tem ${idade} anos e mora na ${estado}`)
        }

    }
}
const p1 = modelo('john',18,'bahia')
const p2 = modelo('Ana',22,'são paulo')
p1.show()
console.log(p1)
//OBJECT JASON
const fromJSON = JSON.parse('{"info": "ARE U FROM BRAZIL?"}')

console.log(fromJSON.info)