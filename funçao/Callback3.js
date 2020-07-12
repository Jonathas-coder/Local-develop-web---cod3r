//document.getElementsByTagName('body')[0].onclick = _ => console.log('by John')


var nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
var tamanhoNome = 0;
var nome = "";
  
function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}
  
nomes.forEach(maiorNome);
console.log(nome);  