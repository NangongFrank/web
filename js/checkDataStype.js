/**
 * 适用于JS内置对象和基本数据类型
 * @param  {[target_data]} o 要确定类型的数据
 * @return {[typeinfo]}   要确定的数据类型的类型
 */
function typeOf(o) {
	var _toString = Object.prototype.toString,
		_type = {
			'undefined': 'undefined',
			'number': 'number',
			'boolean': 'boolean',
			'string': 'string',
			'[object Function]': 'function',
			'[object RegExp]': 'regexp',
			'[object Array]': 'array',
			'[object Date]': 'date',
			'[object Error]': 'error'
		}
	return _type[typeof o] || _type[_toString.call(o)] || (o ? 'object' : 'null')
}