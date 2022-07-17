//O fetch automaticamente gera toda a estrutura de uma Promise

fetch('https://api.github.com/users/maykbrito')
.then(res => {
  res.json()
  .then(data => {
    fetch(data.repos_url)
    .then(res => res.json()
    .then(dt => console.log(dt)))
  })
})

//Aqui temos um encadeamento de promessas
//Rodar no codesandbox.io pq lá funciona