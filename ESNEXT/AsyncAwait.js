const http = require('http')
const getTurma = (letra) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
        http.get(url,res =>{
            let resultado = ''
    
            res.on('data',dados =>{
                resultado += dados
            })
    
            res.on('end',() =>{
               try{
                   resolve(JSON.parse(resultado))
               }catch (e){
                   reject(e)
               }
            })
        })
    })
}
const Gett = async () =>{
    const a = await getTurma('A')
    const b = await getTurma('B')
    const c = await getTurma('C')
    return [].concat(a,b,c)
}
Gett()
.then(show => show.map(nomes => nomes.nome))
.then(show => console.log(show))