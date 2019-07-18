let reg = /!(:\/{2,5})/g,
	http = 'https://www.ngfrankgl.cn//age'

let fetch = http.match(reg),
	test = reg.test(http)
console.log(fetch)
// console.log(test)
// 
let str = 'name'
decodeURIComponent()