// people -> end. d. memoria -> atributos de people 
const people = new Object
people.nome = 'John'
Object.freeze(people)
people.peso = 45
console.log(people)

//transformando os atributos constantes
const PeopleConst = Object.freeze({name:'Aninha'})
PeopleConst.name = 'klein'
console.log(PeopleConst)