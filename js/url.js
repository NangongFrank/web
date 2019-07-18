const url = require('url')
let href = 'http://app.letterbook.cn/letter-api/?userId=21249'

let obj = url.parse(href, true)
console.log(obj.query.userId)