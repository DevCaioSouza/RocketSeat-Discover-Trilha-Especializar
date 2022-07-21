const express = require('express')

const app = express()

app.listen(3000)

jogadorCaro = 'Caio'

app.use(express.json())

app.route('/').get((req, res) => res.send(jogadorCaro))

app.route('/').put((req, res) => {
  jogadorCaro = req.body.jogadorCaro
  res.send(jogadorCaro)
})