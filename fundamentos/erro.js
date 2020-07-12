function Tratarerror(erro){
    throw  'Error 404'
}

function chamar(obj){
    try {
        console.log(obj.name.toUpperCase() + "!!")
    } catch (e) {
        Tratarerror(e)
    } finally {
        console.log('Stay safe')
    }
}
const obj = {
    nome: 'Jhon'
}
chamar(obj)