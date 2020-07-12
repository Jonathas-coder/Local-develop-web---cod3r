function comprar (trabalho1, trabalho2){
    const comprarSorvete= trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const ficarSaudavel = !comprarSorvete
    return {comprarSorvete,comprarTv32,comprarTv50,ficarSaudavel}
}
console.log(comprar(true,true))
console.log(comprar(false,true))
console.log(comprar(false,false))

// ! se for false vira verdadeiro e vice versa.... !! verdadeiro vira verdadeiro
