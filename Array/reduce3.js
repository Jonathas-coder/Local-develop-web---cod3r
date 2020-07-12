Array.prototype.reduce2 = function (callback){
    let acumulador = this[0]
    for (let key = 0; key < this.length; key++){
        acumulador = callback(acumulador,this[key])
    }
    return acumulador
}


const alunos = [{nome:'Ana',nota:7.5,bolsista:true},
{nome:'João',nota:9.5,bolsista:false},{nome:'André',nota:8.7,bolsista:true}]

//Todos os alunos são bolsistas?
const All = (resultado, bolsista ) => resultado && bolsista

const result = alunos.map(_ => _.bolsista).reduce2(All)
console.log(result)

console.log()