funcs=[]
for ( let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}


funcs[1]()
funcs[5]()

// o valor foi mostrado porque a variavel let tem escopo, e guarda o item na memoria sem altera-la posteriormente.