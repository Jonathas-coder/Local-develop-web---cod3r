// estrategia 1 para gerar valores
function get (a,b,c){
    a=a || 1
    b=b || 1
    c=c || 1
    return a + b + c
}
console.log(get(2,3,1),get(),get(0,0,0))
//estrategia 2 para gerar valores
function somar (a,b,c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1: c
    return a + b + c 
}
console.log(somar(1,2,3),somar(),somar(0,0,0))
// estrategia 3, a mais correta
function plus (a=1,b=1,c=1){
    return a+ b + c
}
console.log(plus(),plus(1,24,0),plus(0,0,0))

console.log(Number.isNaN(2))