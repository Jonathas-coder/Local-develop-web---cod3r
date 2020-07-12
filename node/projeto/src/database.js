const sequence = {
    _id:1,
    get id (){return this._id++}
}

let produtos = {}

function SalvarProduto (produto){
    if(!produto.id) produto.id = sequence.id
     produtos[produto.id] = produto
    return produto
}

function GetProduto (id){
    return produtos[id] || {}
}

function GetProdutos (){
    return Object.values(produtos)
}

function ExcluirProduto (id){
    const produto = produtos[id]
    delete produtos[id]
    return produto

}

module.exports = {
    GetProduto,GetProdutos,SalvarProduto
,ExcluirProduto}