const carrinho = ['{"nome":"Caderno", "preco":7.50 }',
'{"nome":"Borracha", "preco":8.2}','{"nome":"Kit de lapis","preco":6.8}']
const inteiro = _ => {
    let v = JSON.parse(_)
    return Number.isInteger(v)
}
const result = carrinho.map(inteiro)
let r = []
for (let key = 0; key <carrinho.length; key++){
    r.push(JSON.parse(carrinho[key]))
}
let y = []
for (let key = 0; key< r.length; key++){
    y.push(Object.values(r[key]))
}
//                      VERSÃO DO PROFESSOR


const ParaJson = J => JSON.parse(J)
const ProdutoPreco = P => P.preco

const resultado = carrinho.map(ParaJson).map(ProdutoPreco)
console.log(resultado)