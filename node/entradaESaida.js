const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if (anonimo){
    process.stdout.write('Fala anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Write your name: ')
    process.stdin.on('data',data =>{
        const nome = data.toString().replace('\n','')
    
        process.stdout.write(`Fala ${nome} !!`)
        process.exit()
    })
    
}
