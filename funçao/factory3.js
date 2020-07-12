class Pessoa{
    constructor(nome){
        this.nome=nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const alerquina = new Pessoa ('Alerquina')

alerquina.falar()

const Criarpessoa = nome =>{
    return {
        falar(){
            console.log(`Meu nome é ${nome}`)
        }
    }
}
const p2= Criarpessoa('John')
p2.falar()
