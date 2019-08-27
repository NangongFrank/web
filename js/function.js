// 箭头函数返回参数
// let fn = e => ({name: 'zhang'})
// console.log(fn().name)

// `*`函数 - js函数生成器
function* fn() {
	console.log(1)
	yield
	console.log(2)
}
let f = fn()
f.next()
f.next()
