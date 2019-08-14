// let reg = /!(:\/{2,5})/g,
// 	http = 'https://www.ngfrankgl.cn//age'

// let fetch = http.match(reg),
// 	test = reg.test(http)
// console.log(fetch)
// // console.log(test)
// // 
// let str = 'name'
// decodeURIComponent()

/*  String.replace()  */
let s = 'javascript'

let b = s.replace(/(java)(script)/, "$2$1")
// console.log(b)
/**
 * $1, $2, ..., $99 与正则表达式中的1-99个子表达式相匹配的文本
 * $& 与正则表达式相匹配的字符串
 * $` 位于匹配子字符的匹配字符串
 * $' 位于匹配子字符串右侧的文本
 * $$ 表示$符号
 */
// let c = s.replace(/ja.+/, "$&$&")
// console.log(c)
let c = s.replace(/(java)?/, '$1')
console.log(c)
