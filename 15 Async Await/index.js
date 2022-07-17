const promessa = new Promise(function (resolve, reject) {
  return resolve('Ok')
})

async function start(){
  try{
    const result = await promessa
    console.log(result)
  } catch(e){
    console.log(e)
  } finally {
    console.log('Rodar sempre!!')
  }

}
start()

//O que está acima, substitui o código
//comentado logo abaixo

// promessa
//   .then(function(response){
//     console.log(response)
//   })
//   .catch(function(error){
//     console.log(error)
//   })
//   .finally(function(){
//     console.log('Sempre irei executar')
//   })