class Avo {
    constructor(sobrenome,skin='Black'){
        this.sobrenome = sobrenome
        this.skin = skin
    }
}

class pai extends Avo {
    constructor(sobrenome, skin){
        super(sobrenome,skin)
    }
}

class filho extends pai{
    constructor(altura, sobrenome, skin){
        super(sobrenome,skin)
        this.altura = altura
    }
}
const tyson = new Avo ('lima', 'black')
const ivan = new pai ()
const john = new filho (178)
console.log(ivan.skin)
console.log(john.altura)
