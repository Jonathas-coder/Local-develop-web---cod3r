//let tem escopo de bloco

{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)

//template string
const name = 'John'
console.log(`Oi ${name}`)

//destructuring

const [A, B ,...tras] = 'Satanoj'
console.log(A,B,tras)

const [x,,y ] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = { nome:'JOHN', idade:18}
console.log(i, nome)

//TIRANDO ARRAY DE ARRAYS
const list = [1,[1],[4]]
console.log([].concat.apply([],list))