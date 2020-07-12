function ForEach2(a){
    for (let key = 0 ; key < a.length ; key++){
        console.log(a[key])
    }
}
const family = ['tyson','evander','McGregor','Popo']
ForEach2(family)

function Exibir (a) {}
Exibir.prototype.ForEach3 = function (a) {return console.log(this.a)}

//versão do professor

Array.prototype.ForEach4 = function (callback){
    for (let key = 0; key < this.length ; key++){
        callback(this[key],key)
    }
}
family.ForEach4(_ => console.log(_))