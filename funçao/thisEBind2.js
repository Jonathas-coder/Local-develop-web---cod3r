function pessoa (){
    this.idade= 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}
//setInterval serve como temporizador, bind(objeto) serve pra segurar o this, nesse caso quem chama o this é o setInterval o temporizador
//então foi necessario amarrar o this no bind, ou criando uma const com o this amarrado, que da no mesmo.
new pessoa

//''idade'' é um atributo de um objeto, então em qualquer objeto que eu crie q tenha o nome da função terá esse atributo