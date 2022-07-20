const express = require('express');

const app = express()

app.listen(3000)

app.use(express.json())

//mostrando apenas a resposta no console \/
//app.route("/").post((req, res) => console.log(req.body))

//enviando o corpo da requisição para o INSOMNIA
app.route("/").post((req, res) => res.send(req.body))