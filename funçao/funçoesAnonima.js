const soma = function (x,y){
    return x + y
}

const Get = function (x,y,operar= soma) {
    return console.log(operar(x,y))
}

Get(4,1)

Get(4,2,(x,y) => {
    return x * y
})

Get(5,7,(y,x) => y - x)


const obj= {
    falar(){
        return console.log('hello world !')
    }
}

obj.falar()