const express = require('express')
const app = express()
const body = require('body-parser')

app.use(body.urlencoded({extended:true}))

app.post('/usuarios',(req,res) =>{
    res.send('<h2>Parabéns pelo input</h2>')
    console.log(req.body)
})
app.post('/usuarios/:id',(req,resp) =>{
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h2>Parabéns usuário  alterado!</h2>')
})

app.listen(3003)