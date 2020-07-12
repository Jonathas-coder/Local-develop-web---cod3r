const alunos = [{nome:'Ana',nota:7.5,bolsista:true},
{nome:'João',nota:9.5,bolsista:false},{nome:'André',nota:8.7,bolsista:true}]

//Todos os alunos são bolsistas?
const All = (resultado, bolsista ) => resultado && bolsista
const result = alunos.map(_ =>_.bolsista).reduce(All)
console.log(result)
//Existe algum aluno bolsista?
const resultado = alunos.map(_ => _.bolsista).reduce(function(s,n){
    if (s == true || n == true){
        return s || n
}})
//console.log(resultado)