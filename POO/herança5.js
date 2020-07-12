console.log(typeof Object)
console.log(typeof String)
console.log(typeof Array)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Jonathas'.reverse())

//acrescentei uma função dentro do __proto__ de função string...Já que String é uma função, toda função gera um objeto apriori
//e dentro da função tem o prototype, é possivel adicionar valores