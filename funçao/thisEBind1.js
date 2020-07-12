const whiteP = {
    sorta:'HEYO PORRA',
    skirt(){
        return console.log(this.sorta)
    }

}


const people = {
    saudação:'Hello world !',
    falar(){
        return console.log(this.saudação)
    }
}
const FalaAI = people.falar.bind(people) //bind vai procurar o this, no caso dentro do objeto.
const FalaMan = whiteP.skirt.bind(whiteP)
FalaMan()
FalaAI()

//this serve pra apontar os atributos dentro do objeto
