console.log('=============== Assignment A ===============')
function factorialOfNum(num) {
  let factorial = 1
  if (num == null || num == undefined || num <= 0) {
    return `The given Number is Invalid`
  }
  for (let index = num; index >= 1; index--) {
    factorial = factorial * index
  }
  return factorial
}
var result = factorialOfNum(5)
console.log(`1.1 The given number is "5" and The factorial is '${result}'`)
console.log('------------------------------------------------------------')
var result = factorialOfNum(3)
console.log(`1.2 The given number is "3" and The factorial is '${result}'`)
console.log('------------------------------------------------------------')
var result = factorialOfNum(null)
console.log(`1.3 The given number is "null" and '${result}'`)
console.log('------------------------------------------------------------')
var result = factorialOfNum(8)
console.log(`1.4 The given number is "8" and The factorial is '${result}'`)
console.log('------------------------------------------------------------')
var result = factorialOfNum(undefined)
console.log(`1.5 The given number is "undefined" and  '${result}'`)
console.log('------------------------------------------------------------')
var result = factorialOfNum(9)
console.log(`1.6 The given number is "9" and The factorial is '${result}'`)
console.log('------------------------------------------------------------')
var result = factorialOfNum(0)
console.log(`1.7 The given number is "0" and '${result}'`)
console.log('------------------------------------------------------------')
var result = factorialOfNum(7)
console.log(`1.8 The given number is "7" and The factorial is '${result}'`)
