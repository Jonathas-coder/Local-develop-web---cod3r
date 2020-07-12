//Armazenando função numa variavel
const try2 = (a,b) => {
    return a +b
}
console.log(try2(3,2))

//função dentro de um array
const list =[function(a,b){return a-b},12,'Paz']
console.log(list[0](5,4))

//função dentro de um objeto
const obj2 = {}
obj2.falar = function (idk) {
    return console.log('HI')
} 
obj2.falar()


//função dentro e função
function obs (fun){
    fun()
}
obs(function () {console.log('Executando...')})

//Ainda função dentro de função

function soma(a,b){
    return function(c)
    {
        console.log(a+b+c)
    }
}
const valores = soma(5,5)
valores(5)
