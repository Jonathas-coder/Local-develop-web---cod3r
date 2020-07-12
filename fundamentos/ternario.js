const school = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(school(9.0))

// ou pode ser feito com corpo tb

const escola = boletim => {
    return boletim >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(escola(4))