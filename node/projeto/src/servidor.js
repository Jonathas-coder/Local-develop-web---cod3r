const porta = 3003
const express = require('express')
const app = express()
const database = require('./database')
const Body = require ('body-parser')

app.use(Body.urlencoded({extended:true})) //transforma todas as req em objeto para o server.

app.get('/produtos',(req,res,next) => {
    res.send(database.GetProdutos()) 
})

app.get('/produtos/:id',(req,res,next) =>{
    res.send(database.GetProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    const produto = database.SalvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id',(req,res,next)=>{
    const produto = database.SalvarProduto({
        id:req.params.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id',(req,res,next)=>{
    const produto = database.ExcluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta,() =>{
    console.log(`Server to active in port ${porta}`)
})
