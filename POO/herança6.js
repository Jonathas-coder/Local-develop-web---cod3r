function Aula (aula, videoID){
    this.aula = aula
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo',123)

console.log(aula1)

function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula2 = novo('Get out',456)
console.log(aula2)

//este é o exemplo, mas deu erro.