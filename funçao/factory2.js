function criandoProduto (nome='<desconhecido>', preço=0){
    return {
        nome,
        preço,
        desconto:0.1
    }
}
console.log(criandoProduto('notebook',2.455))

