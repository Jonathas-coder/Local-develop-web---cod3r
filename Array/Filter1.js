const shopping = [{nome:'notebook',preco:4578,fragil:true},
{nome:'ipad pro',preco:2546,fragil:true},{nome:'Copo',preco:45,fragil:true},
{nome:'Vassoura',preco:12,fragil:false}]

const caros = shopping.filter(_ =>{
    if(_.preco > 500 && _.fragil == true){
        return _
    }
})
console.log(caros)