const pessoa = Object.preventExtensions({nome:'John',altura:175 })
pessoa.idade = 123
console.log(pessoa)
delete pessoa.altura
pessoa.nome = 'Ana'
console.log(pessoa)
console.log('Extensível:',Object.isExtensible(pessoa)) // se for false, mostra que não pode adicioar.. caso contrario pode.


//Object.seal

const p1 = {nome:'Heyo',idade: 12}
Object.seal(p1)
p1.nome = 'Jyts'
console.log('Está selado:',Object.isSealed(p1))
console.log(p1)

//Object.freeze()

Object.freeze(p1)
delete p1.nome
console.log(p1)