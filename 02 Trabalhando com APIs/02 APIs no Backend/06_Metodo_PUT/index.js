const express = require('express')

const app = express()

app.listen(3000)

let author = "Caio"

//middleware
app.use(express.json())

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
  author = req.body
  res.send(author)
})