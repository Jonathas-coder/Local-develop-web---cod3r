const Mod = require('../../moduleA')
console.log(Mod.Ohaio)

//const ModTest = require ('saudacao')
//console.log(ModTest.Ola)

const http = require('http')
http.createServer((req,res) =>{
    res.write('OLÁ MUNDO WEB !!!')
    res.end()
}).listen(8080)

const Mod2 = require('../../../node_modules/saudacao')
console.log(Mod2.Ola)