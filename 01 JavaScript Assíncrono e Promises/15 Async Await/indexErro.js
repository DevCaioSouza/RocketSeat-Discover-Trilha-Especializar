const promessa = new Promise(function (resolve, reject) {
  return reject('Error')
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