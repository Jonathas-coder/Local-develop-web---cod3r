console.log(typeof Array)
console.log(typeof new Array)

const lista = new Array
const numb = 1 + 2
lista.push(numb)
console.log(lista)

const list = [9,5,4,8,2,1,5,3]
delete list [3]
list[8] = 100
console.log(list)

function SortV (a, b){ //SEMPRE CRIE ESTA FUNÇÃO PRA ORDENAR DE FORMA NÚMERO O MÉTODO SORT
    return (a-b)
}
list.sort(SortV)

list.splice(1,0,'HMM') // array.splice(start, end) 

console.log(list)