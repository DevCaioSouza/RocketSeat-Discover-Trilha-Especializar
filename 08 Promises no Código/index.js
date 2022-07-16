/*
		Promise:
				A promessa de que algo irá acontecer
				dando certo ou dando errado
*/

console.log('Pedi o uber')

const promessa = new Promise((resolve, reject) => {
	return resolve('O Uber Chegou')
})

console.log('aguardando')

promessa.then(result => console.log(result))
