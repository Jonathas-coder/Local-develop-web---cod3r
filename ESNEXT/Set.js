//Set é uma estrutura que não aceita repetição.
//Não possui KEYS

const times = new Set
times.add('Flamengo')
times.add('Vasco')
times.add('Bahia')
times.add('Flamengo')
console.log(times)
console.log(times.size)


const Lista = ['Bahia','Bayern','Borussia','Bayern']
const ListaSet = new Set(Lista)
console.log(ListaSet)
console.log(ListaSet.size)
console.log(ListaSet.has('Bahia'))