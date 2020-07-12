const p = {nome:'ferrari',
        valor:4545}

console.log(p)
p.nome=null // deixando vazio a id nome
console.log(p)
// console.log(p.name) // a id name não foi definida 'undefined'
console.log(!!p.nome) // testando se a id com valor null é falso ou true
console.log(!!p) 