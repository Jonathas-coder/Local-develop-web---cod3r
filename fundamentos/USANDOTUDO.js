const print = mostrar => (mostrar='===============')
console.log(print(true),'Bem vindo ao javaScript',print(true))
const obj = [
    pessoa2={
        nome:'Aninha',
        peso:'54',
        altura:'1.65'
    },
    pessoa1={
        nome:'Jonathas',
        peso:'65',
        altura:'1.75'
    }
    
]
console.log(obj)
//console.log(obj[1].nome) // pegando uma key(objeto) dentro de um array
const resultado = ({min=0,max=1000}) =>{
    var valor = Math.random() * (max - min ) + min

    return Math.floor(valor) 
}


const dados = {
    max: 55,
    min:50}

let f = resultado(dados)
console.log(f)
const verif = (valor) => valor == f ? 'Mesmo número':'Números diferentes'
console.log(verif(resultado(dados)))