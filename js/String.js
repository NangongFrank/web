/**
 * startsWith()
 * endsWith()
 * includes()
 */


/**
 * padStart()
 * padEnd()
 */


/**
 * repeat()
 */

/* 获取字符串的字节长度需要通过手工计算 - 处理方式有问题bug */ 
// 方法一
/*String.prototype.lengthB = () => {
	let b = 0,
		l = this.length
	if(l) {
		for(let i = 0; i < l; ++ i) {
			if(this.charCodeAt(i) > 255) b +=2 
			else ++ b
		}
		return b
	} else {
		return 0
	}
}
let s = 'String对象长度'
console.log(s.lengthB())

// 方法二
function len() {
	let c = ''
	for(let i = 0; i < len; ++i) {
		c = this.charAt(i)
		if(escape(c).length > 4) b += 2
		else if(c != '\r') ++ b
	}
}
// 正则方法
function len2() {
	let c = ''
	for(let i = 0; i < l; ++ i) {
		c = this.charAt(i)
		if(/^[\u0000-\u00ff]$/.test(c)) ++b
		else b += 2 
	}
}*/