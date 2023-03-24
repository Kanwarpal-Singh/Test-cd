// const {sum,div,mul,sub} = require("./index.js")

// sum(5,6)
// sub(15,3)
// mul(4,5)
// div(34,2)
// sum(7,8)
const add = require("./index.js")

var arguments = process.argv
var sum = add(arguments[2], arguments[3])
console.log(sum);
