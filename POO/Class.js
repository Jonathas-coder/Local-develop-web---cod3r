class Lancamento {
    constructor(nome= '<desconhecido>', valor = 0){
        this.nome = nome, this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes , this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach((d) => this.lancamentos.push(d) )
    }
    sumario (){
        let ValorConsolidado = 0
        this.lancamentos.forEach(l => {
            ValorConsolidado += l.valor
        })
    return ValorConsolidado
    }
}

const salario = new Lancamento('Salário',45000)
const energia = new Lancamento('Luz',-500)

const conta = new cicloFinanceiro(6,2020)
conta.addLancamentos(salario,energia)
console.log(conta.sumario())
