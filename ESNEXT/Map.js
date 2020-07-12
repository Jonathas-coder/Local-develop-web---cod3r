const tech = new Map
tech.set('react',{framework:false})
tech.set('Angular',{framework:true})

console.log(tech.get('Angular'))

const ChavesVariadas = new Map([
    [function e () {},'Função'],
    [{ },'Objeto'],
    [123,'Número'],
])
console.log(ChavesVariadas)
ChavesVariadas.delete(123)
console.log(ChavesVariadas.has(123))

console.log(ChavesVariadas.size)