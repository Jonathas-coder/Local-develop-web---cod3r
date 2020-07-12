for (let letra of 'John'){
    console.log(letra)
}
const people = ['John','Luana','Laura','Carla']
for (let element of people){
    console.log(element)
}
for (let elements of people.keys()){
    console.log(elements)
}

for (let [cv,vl] of people.entries()){
    console.log(vl,cv)
}
//A priori for of lerá os valores do array.. porém é possivel ler chaves usando .keys()
const att = ['John','Ana','Carla','Fernanda','John']
const NomesSet = new Set(att)
for (let v of NomesSet){
    console.log(v)
}
//Nem ADIANTA TENTAR LER AS KEYS do Set, ele não tem CHAVES NÃO É INDEXADO E CONTÉM APENAS VALORES.