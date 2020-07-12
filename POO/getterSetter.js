//pra ter um nivel maior de encapsulamento 

const sequencia = {
    _valor: 1,
    get valor() {return this._valor++ },
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor 
        }
    }
}
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)

//get e set só dentro de objetos. get cria o atributo com um retorno e o set imprime o atributo...