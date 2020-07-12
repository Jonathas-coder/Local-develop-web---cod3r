const Carro = function (velocidadeMax=200,delta= 5) {
    //atributo privado
    let velocidadeAtual= 0
    //atributo publico
    this.acelerar = function ()  {
        if (velocidadeAtual + delta <= velocidadeMax ){
            velocidadeAtual += delta
        }
        else{ velocidadeAtual=velocidadeMax
        }
    }     
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const GTR = new Carro(300,80)
GTR.acelerar()
GTR.acelerar()
GTR.acelerar()
GTR.acelerar()

console.log(GTR.getVelocidadeAtual())