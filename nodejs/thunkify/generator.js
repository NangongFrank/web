/*
* @Author: zhao mac
* @Date:   2019-08-27 11:10:47
* @Last Modified by:   zhao mac
* @Last Modified time: 2019-08-27 11:24:47
*/
let fs = require('fs'),
	thunkify = require('thunkify'),
	path = require('path')

let readFile = thunkify(fs.readFile)

function* gen() {
	let r1 = yield readFile(path.join(__dirname, 'file', 'age'))
	console.log(r1.toString())
	let r2 = yield readFile(path.join(__dirname, 'file', 'name'))
	console.log(r2.toString())
}

let g = gen()
let r1 = g.next()
r1.value((err, data) => {
	if(err) throw err
	let r2 = g.next(data)
	r2.value((err, data) => {
		if(err) throw err
		g.next(data)
	})
})