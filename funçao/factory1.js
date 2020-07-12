function buildP (nome='<desconhecido>', preço='0'){
    return {
        name:nome,
        sale:preço,
        desconto:'18%'
    }
}

console.log(buildP('Jonathas','45'))