const escola = [{
    nome:'Turma M1',
    alunos: [{
        nome:'JOhn',
        nota:7.8
    },{
        nome:'Ana',
        nota:8.6
    }]

},{
    nome:'Turma BN',
    alunos:[{
        nome:'Luan',
        nota:4.5
    }]
}]

const GetNota = aluno => aluno.nota
const GetTurma = turma => turma.alunos.map(GetNota)
const result = escola.map(GetTurma)

Array.prototype.FlatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const flap = escola.FlatMap(GetTurma)
console.log(flap)

console.log(escola)