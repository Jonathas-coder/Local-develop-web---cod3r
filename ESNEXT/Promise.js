function falarDepois(segundos, frase){
    return new Promise ((resolve,reject)=>{
        setTimeout(() =>{
            reject(frase)
        },segundos * 1000)
    })
}

falarDepois(3,'Olá mundo')
    .then(frase => frase.concat('?!?!'))
    .then(Outrafrase => console.log(Outrafrase))
    .catch(error => console.log('Error 404'))

//Estrutura de uma promise:
//ela sempre será retornada como um objeto callback; return new Promise ( (resolve,reject) => resolve(params) )
//perceba que ela ordenará callbacks.
//o método .then(callback) também precisará de uma callback. A sequência de cada .then gera um objeto novo.
