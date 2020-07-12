const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')
axios.get(url).then(response =>{
    const funcionario = response.data
    const girls = []
    const choosing = funcionario.filter((_) =>{
        _.genero == 'F'? girls.push(_) : null
    })
    const china = []
    const Picking = girls.filter(_ => {
        _.pais == 'China' ? china.push(_) : null
    })
    const menor = china.map(_ => _.salario).reduce((a,b) => {
        let t = Math.min(a,b)
        return t
    })
    const pobre =[]
    const verify = china.map(_ => _).map(_ =>{
        _.salario == 2435.61 ? pobre.push(_) : null
    })
    console.log(pobre)
})



//Desafio é pegar a mulher chinesa com menor salario da lista
//axios é um client que faz requisões pra obter informações de algo remoto.

//versão do professor
const chineses = f => f.pais === 'China' //filter
const muié = f => f.sexo === 'F'//filter
const Menorsalario = (func, funcAtual) =>{  //reduce
    return func.salario < funcAtual.salario ? func : funcAtual
}