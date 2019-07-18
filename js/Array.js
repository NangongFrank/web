// 数组快速填充
/*const p = {
	name: 'zhang',
	age: 12,
	height: 140,
}
let arr = Array(10).fill(p)
console.log(arr)*/
// console.log(Array.__proto__)

/**
 * 类数组转数组
 * Array.from()
 */
// let objArr = {
// 	0: 'name',
// 	1: 'age',
// 	2: 'height',
// 	length: 3,
// }
// 类数组转数组
// let arr = Array.from(objArr)
// console.log(arr)

// 数组直接foreach
// arr.forEach((value, index, arr) => {
// 	console.log(value, index, arr)
// })

// 对类数组的每一个元素执行func方法后的结果再返回
// let arr = Array.from(objArr, func)
// function func(value, index) {
// 	console.log(value, index)
// 	return typeof value
// }
// console.log(arr)

/**
 * 将对应数据生成数组
 * Array.of()
 * 用于替代`new Array()`和`Array()`
 */
// let arr = Array.of(1, 3, 5, 6)
// console.log(arr)
