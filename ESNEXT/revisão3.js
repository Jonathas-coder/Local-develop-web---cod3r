//ES8 Object.values(), Object.entries
//Object.entries cria um array com varios array a partir da key e value.
const obj = {a:1,b:2,c:3}
console.log(Object.entries(obj))
console.log(Object.values(obj))
console.log(Object.keys(obj))

//Notação literal de objeto
let nome = 'Satanoj'
const p = {
    nome,
    falar(){
        return `Nice to meet you !`
    }
}
console.log(p.nome, p.falar())
//class
class animal {}
class Cachorro extends animal{
    falar(){
        return 'Au Au!'
    }
}
console.log(new Cachorro().falar())





//falando olá mundo pelo Node e saindo pelo terminal.
const anonimo = process.argv.indexOf('-a') !== -1
if (anonimo){
    process.stdout.write('Olá mundo!')
}
