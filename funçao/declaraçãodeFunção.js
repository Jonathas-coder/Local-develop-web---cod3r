soma(1,4)
//apenas a function declaretion permite esse hoisting

function soma (y,x){
    return console.log(x+y)
}

//essas não
menor(5,4)
const menor = (x,y) => console.log(x-y)

