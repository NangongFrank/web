/*
* @Author: frank_zhao
* @Date:   2019-08-28 09:36:18
* @Last Modified by:   zhao mac
* @Last Modified time: 2019-08-28 09:52:30
*/
let fs = require('fs'),
	path = require('path'),
	promisify = require('util').promisify

let readFile = promisify(fs.readFile)

async function file(filepath) {  // await 后跟随的方法必须是一个`Promise`方法
	let buf1 = await readFile(path.join(__dirname, 'file', 'log1'))
	let buf2 = await readFile(path.join(__dirname, 'file', 'log2'))
	let len = buf1.length + buf2.length
	let buf = Buffer.concat([buf1,buf2], len)
	console.log(buf.toString())
}
// file()
async function testFile(filepath) {  // 使用`try...catch`捕获异常
	try{
		let buf1 = await readFile(path.join(__dirname, 'file', '1log1'))
		let buf2 = await readFile(path.join(__dirname, 'file', 'log2'))
		let len = buf1.length + buf2.length
		let buf = Buffer.concat([buf1,buf2], len)
		return buf
	} catch(err) {
		throw err
	}
}

// testFile().then(buf => {
// 	console.log(buf.toString())
// }).catch(err => {
// 	console.log(err, 'err')
// })