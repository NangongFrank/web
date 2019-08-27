/*
* @Author: zhao mac
* @Date:   2019-08-27 11:47:55
* @Last Modified by:   zhao mac
* @Last Modified time: 2019-08-27 11:56:45
*/
let fs = require('fs'),
	path = require('path')

function readFile(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, (err, buf) => {
			if(err) reject(err)
			else resolve(buf)
		})
	})
}

// generator 模式
function* gen() {
	let r1 = yield readFile(path.join(__dirname, 'file', 'age')),
		r2 = yield readFile(path.join(__dirname, 'file', 'name'))
	console.log(r1.toString())
	console.log(r2.toString())
}
let g = gen()
let r1 = g.next()
r1.value.then(buf => {
	let r2 = g.next(buf)
	r2.value.then(buf => {
		g.next(buf)
	})
})

// async 模式
async function fn() {
	let r1 = await readFile(path.join(__dirname, 'file', 'age')),
		r2 = await readFile(path.join(__dirname, 'file', 'name'))
	console.log(r1.toString())
	console.log(r2.toString())
}
// fn()