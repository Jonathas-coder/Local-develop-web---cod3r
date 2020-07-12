function Tag (partes, ...div){
    console.log(partes)
    console.log(...div)
    return `Outra string`
}
const nome = 'Kajota'
const sit = 'Em pé'
console.log(Tag`My name is ${nome} and i'm ${sit}`)

//Fará 2 array, um para as strings interpoladas e as que não estão.
