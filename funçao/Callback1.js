const business = ['Jay','Suzan','Medelyn','John']
function print (nome, indicie){
    return console.log(`${indicie+1}. ${nome}`)
}
business.forEach(print)

const X = _ => console.log(`${_} xxx`)
business.forEach(X)

//forEach pega o indicie e os elementos do array sem julgar se é F ou V..