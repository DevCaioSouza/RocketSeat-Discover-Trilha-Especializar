const promessa = new Promise(function (resolve, reject) {
  return resolve('Ok')
})

promessa
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.log(error)
  })
  .finally(function(){
    console.log('Sempre irei executar')
  })