// função sem retorno dentro de uma variavel
const test = function (a,b){
    console.log(a + b)
}

test(2,2)

// função ANONIMA arrow dentro de uma variavel com retorno

const test2= (a,b) => {
    return a + b
}

console.log(test2(2,4))

// função arrow minimizada
 const test3 = (a,b) => a + b
 
 console.log(test3(4,4))

 // função dentro de uma variavel com apenas uma linha

 const imprima2 = a => console.log(a)
 
 
 imprima2('SHOW DE BOLA !')