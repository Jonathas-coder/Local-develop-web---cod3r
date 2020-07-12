function area (altura,largura){
    const valor = altura * largura
    if (valor > 20){
        console.log(`Valor acima do permitido: ${valor}m²`)
    }else{
        return valor
    } 
}
console.log(area(5,5))

console.log(area())
//A função só tem 2 parametros, então ela pega os 2 e ignora o resto:
console.log(area(8,8,4,54,654,65,465,465,46,565,465,654,654,654,654,654)) 
