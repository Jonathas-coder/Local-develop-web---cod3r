//Closure é o escopo no qual a função foi declarada;
//ela relembrará apenas do espaço fisico que em foi declarada


const x = 'Global'
function fora () {
    const x = 'Local'
    function dentro (){
        return x
    }
    return dentro
}

const Minhafunção = fora()
console.log(Minhafunção())

// local porque a variavel foi declarada no mesmo escopo da função dentro. 
//Ela pega o valor x, e a função fora retorna a função dentro;