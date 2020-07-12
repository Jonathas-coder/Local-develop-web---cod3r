//function o this varia
const confere = function (parametro){
    return console.log(parametro == this)
}
confere(global)


//arrow o this não varia
const verify = (param) =>{
    return console.log(param == global)
}
verify(this)


let comparaThisArrow = (paran) =>{
    return console.log(paran == this )
}
comparaThisArrow(module.exports)
//em node td é modulo, módulo é como se fosse um bloco só que em funções, array etc...

const kb = {}

comparaThisArrow = comparaThisArrow.bind(kb)
comparaThisArrow()