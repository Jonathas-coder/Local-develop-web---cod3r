function getnumber(max,min){
    const f = Math.random() * (max-min) + min
    return Math.floor(f)
}

let control = 0
do{
    control = getnumber(10,-1)
    console.log(`Valor gerado: ${control}`)
}while (control != -1)
console.log('FIM')