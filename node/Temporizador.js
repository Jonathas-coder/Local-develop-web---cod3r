const schedule = require('node-schedule')

const tempo = schedule.scheduleJob('*/5 * 15 * * 5',function () {
    console.log('Loading...', new Date().getSeconds())
})

//estrutura scheduleJob('/P.Segundo, Minuto, D.Mês, Mês, Dia em número) terça representa 2

setTimeout(function () {
    tempo.cancel()
    console.log(`Cancelando..`)
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 30

const tempo2 = schedule.scheduleJob(regra,function () {
    console.log('Executando no segundo:', new Date().getSeconds())
} )
