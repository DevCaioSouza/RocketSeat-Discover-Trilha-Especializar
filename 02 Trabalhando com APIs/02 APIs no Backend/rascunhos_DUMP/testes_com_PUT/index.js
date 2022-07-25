const express = require('express')

const app = express()

app.listen(3000)

jogadorCaro = 'Caio'

app.use(express.json())

app.route('/').get(( ___ , res) => res.send(jogadorCaro))

app.route('/').put((req, res) => {
  jogadorCaro = req.body
  res.send(jogadorCaro)
})