functs=[]
for (var i = 0 ; i< 10 ; i++){
    functs.push(function(){
        console.log(i)
    })
}

functs[2]()
functs[6]()

//não vai respeitar a ordem... o var não tem escopo dentro de bloco

//