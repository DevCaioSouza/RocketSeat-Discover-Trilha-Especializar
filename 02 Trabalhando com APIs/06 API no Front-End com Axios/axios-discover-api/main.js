const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
  axios.post(url, newUser)
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

function getUser(id){
  axios.get(`${url}/${id}`)
  .then(response => {
    const data = response.data
    userName.textContent = data.name
    userCity.textContent = data.city
    userId.textContent = data.id 
    userAvatar.src = data.avatar
  })
  .catch(error => console.error(error))
}

getUsers()
getUser(1)


const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro"
}

addNewUser()
//console.error é pra ficar destacado de vermelho

// o data do response.data é pra ir direto no users