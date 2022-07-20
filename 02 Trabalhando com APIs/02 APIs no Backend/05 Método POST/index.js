const express = require('express');

const app = express()

app.listen('3000')

//middleware: ponte entre as requisições
//app.use() é um método usado para fazer middlewares

app.use(express.json())

app.route('/').post((req, res) => res.send(req.body))

//tudo enviado no POST é recebido no req


//sempre precisamos parar o terminal (ctrl+c) e rodar de novo
//para vermos as alterações