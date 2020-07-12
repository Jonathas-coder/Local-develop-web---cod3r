const nome = 'john'

function Get (){
    console.log(nome)
}

function pegar (){
    const nome = 'Test'
    Get()
}
pegar()

//a função pegou a const no contexto léxico em que foi declarada..