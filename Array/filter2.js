Array.prototype.filter2 = function (callback){
    const NewA = []
    for (let key = 0 ; key < this.length; key++){
        if (callback(this[key])){
            NewA.push(this[key])
        }
    return NewA    
    }
}


const shopping = [{nome:'notebook',preco:4578,fragil:true},
{nome:'ipad pro',preco:2546,fragil:true},{nome:'Copo',preco:45,fragil:true},
{nome:'Vassoura',preco:12,fragil:false}]

const caros = shopping.filter2(_ =>{
    if(_.preco > 500 && _.fragil == true){
        return _
    }
})
console.log(caros)

//filtra os elementos de acordo com que  vc pede.