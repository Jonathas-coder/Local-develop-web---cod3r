const lista = [1,2,3,4,5,6]
lista.shift() // remove o primeiro!
console.log(lista)

lista.unshift(0)//adiciona na primeira posição.
console.log(lista)

lista.pop() // remove o ultimo
console.log(lista)

lista.push(7) //adiciona na ultima
console.log(lista)

lista.splice(5,5,'Test')//remove ou adiciona
console.log(lista)

const LIST = lista.slice(0,2)//novo array com os elementos escolhidos
console.log(LIST)