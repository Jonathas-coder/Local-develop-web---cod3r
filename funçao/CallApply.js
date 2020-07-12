function Calcular (imposto=0,moeda='R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
 
}

const produto = {
    preco:1200,
    desc:0.5,
    Calcular
}
const produto2 = {
    nome:'notebook',
    preco:1500,
    desc:0.9,
    Calcular
}

global.preco = 250
global.desc = 0.5

console.log(Calcular())


//basicamente o call e o apply vai aplicar a função sobre o objeto que vc definir
//função.call(objeto)