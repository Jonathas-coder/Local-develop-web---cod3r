const pessoa = {
    nome:'oajs',
    peso:54,
    altura:78
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

pessoa.nome = 'John'

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'Data',{
    enumerable:true,
    writable:false,
    value:'01/04/2001'
})
console.log(pessoa.Data)


const sala = {a:1}
const b = {b:2}
const c = {c:3}
Object.assign(sala,b,c)
console.log(sala)