const produto = new Object
produto.preco = 12
produto.nome = 'meia'
console.log(produto)

const carro = {
    marca:'A4',
    preco:87000,
    proprietario:'John',
    endereço: { 
        logadouro:'Av.Pequena',
        numero:59
    },
    condutores: [{nome:'Aninha',
                idade:56    
},{nome:'Carla',
idade:78}],

somar: function (){
    return console.log('Coffe crazy')
    }
}

console.log(carro)
carro.somar()
delete carro.condutores
delete carro.somar
console.log(carro)
