function getnumber(max,min){
    const f = Math.random() * (max-min) + min
    return Math.floor(f)
}

console.log(getnumber(7,-1))
let control = 0
while (control != -1){
    control = getnumber(10,-1)
    console.log(`Valor gerado: ${control}`)
}
console.log('FIM')