const express = require('express');

const app = express()

//ao escrever express() estamos inicializando a constante express

app.listen('3000')

//no package.json temos "main": "index.js"
//indicando que esse é um arquivo de referência

app.route('/').get((req, res) => res.send("Hello"))
app.route('/sobre').get((req, res) => res.send("Hello sobre"))
app.route('/contato').get((req, res) => res.send("Hello contato"))

//o browser fica "procurando" as rotas e esperando algum retorno

//sempre precisamos parar o terminal (ctrl+c) e rodar de novo
//para vermos as alterações