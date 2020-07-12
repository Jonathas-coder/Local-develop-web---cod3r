const BuildindP = function (nome) {
    this.nome= nome

    this.falar= () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new BuildindP('John')

console.log(p1.falar())