const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

getUsers()

//console.error é pra ficar destacado de vermelho

// o data do response.data é pra ir direto no users