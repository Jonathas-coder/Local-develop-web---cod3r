Array.prototype.map2 = function (callback){
    for (let key = 0; key < this.length; key++){
        callback(JSON.parse(this[key]))
    }
}



const carrinho = ['{"nome":"Caderno", "preco":7.50 }',
'{"nome":"Borracha", "preco":8.2}','{"nome":"Kit de lapis","preco":6.8}']
const Produto = _ =>console.log(_.preco)
const resultado = carrinho.map2(Produto)

//         VERSÃO DO PROFESSOR 

Array.prototype.map3(function(callback){
    const newAR = []
    for (let key = 0; key < this.length; key++)
        newAR.push(callback(this[key],key,this))
    return newAR
    })

map3() // mesma função do map comum
