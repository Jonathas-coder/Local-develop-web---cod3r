function test (dado){
    string=''
    soma = 0
      for (let i in arguments){
        if (Number.isInteger(dado))
        {
            soma += arguments[i]
        }
        else
        {string+=arguments[i]}
    }
    if (soma == true){
        return console.log(soma)
    }
    else if (soma && string == true){
        return console.log(soma,string)
    }
    else {
        return console.log(string)
    }
}
test('LiL boo peep ',21)
// basicamente o arguments é o parameto sem exceção dentro da função, seja string ou number... 
//todo paramento esta contido dentro desse array na função

test('a',' e ', 'b','=',45)
