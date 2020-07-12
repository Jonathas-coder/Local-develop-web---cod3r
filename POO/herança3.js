const father = {name:'ivan', skin:'brown',colorHair:'black'}
const son = Object.create(father, {name:{value:'John',writable:false,enumerable:true}})
Object.defineProperty(son, 'height',{
    enumerable:true,
    writable:false,
    value:'175CM'
})

console.log(son.skin)

for (let key in son){
    son.hasOwnProperty(key)?   //objeto.hasOwnProperty vai verificar se é do objeto ou é herança.
    console.log(key) : console.log(`herança ${key}`) 
}
//const objeto = Object.create(objectprototype, {nome do atributo : {value: , writable:, enumerable: }})
//Object.create, criará um objeto com o mesmo prototype do objeto referenciado.
