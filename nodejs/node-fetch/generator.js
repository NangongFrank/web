/*
* @Author: zhao mac
* @Date:   2019-08-27 10:19:54
* @Last Modified by:   zhao mac
* @Last Modified time: 2019-08-27 10:47:16
*/
let fetch = require('node-fetch')

function* gen() {
	let url = 'https://api.github.com/users/github'
	let result = yield fetch(url)
	console.log(result.bio)
}

let g = gen()
let data = g.next()
data.value.then(data => {
	return data.json()
}).then(data => {
	g.next(data)
	// console.log(data)
})