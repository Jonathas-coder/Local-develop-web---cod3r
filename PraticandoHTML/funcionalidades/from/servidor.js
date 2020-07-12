const express = require('express')
const body = require('body-parser')

const app = express()

app.use(body.urlencoded({extended:true}))

app.post('/users',(req,res) =>{
    console.log(req.body)
    res.send('<h2>Parabéns pelo input meu caro! </h2>')
})

app.listen(3005)