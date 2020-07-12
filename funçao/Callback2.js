const list = []
const GrupoDeNumeros = [7,8,9,2,8,1,3,4,8,7]
     for (let i in GrupoDeNumeros ){
        if (GrupoDeNumeros[i] < 7){
            list.push(GrupoDeNumeros[i])
        }
    }
console.log(list)

const Feed = GrupoDeNumeros.filter( _ => _ < 7 )

console.log(Feed)

//filter basicamente diz se é V ou F, de acordo com a condição que você criar.