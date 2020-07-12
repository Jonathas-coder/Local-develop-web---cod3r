const alunos = [{nome:'Ana',nota:7.5,bolsista:true},
{nome:'João',nota:9.5,bolsista:false},{nome:'André',nota:8.7,bolsista:true}]
const result = alunos.map(_ => _.nota).reduce(function (add, valor){
    return add + valor
})

console.log(result)