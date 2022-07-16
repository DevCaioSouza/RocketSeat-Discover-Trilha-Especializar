let aceitar = true

console.log('Uber solicitado')

const promessa = new Promise((resolve, reject) => {

    if(aceitar){
        return resolve('Seu pedido foi aceito!')
    }
    
	return reject('Pedido Negado')
})

console.log('Aguardando...')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Operação Encerrada'))