// works since node 8.5.0
// http://node.green/
const {URL} = require('url')
const url = new URL('http://www.google.com')
url
let href, rest
({href, ...rest} = url)
