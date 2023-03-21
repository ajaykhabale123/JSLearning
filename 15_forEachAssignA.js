const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]
console.log('Given Array: ', arrayNumbers)
console.warn(
  '---------------------------1] Log the element with its index ---------------------------',
)
arrayNumbers.forEach((numbers, index) => {
  console.log(`Index : ${index}, Element : ${numbers}`)
})
console.warn(
  '---------------------------2] Find the positive numbers ---------------------------',
)
let positiveNumbers = []
arrayNumbers.forEach((numbers) => {
  if (numbers > 0) {
    positiveNumbers.push(numbers)
  }
})
console.log(`The postive numbers are : `, positiveNumbers)
console.warn(
  '---------------------------3] Find the negative  numbers and add into array ---------------------------',
)
let negativeNumbers = []
arrayNumbers.forEach((numbers) => {
  if (numbers < 0) {
    negativeNumbers.push(numbers)
  }
})
console.log('The Negative numbers are : ', negativeNumbers)
console.warn(
  '---------------------------4] Find the even numbers ---------------------------',
)
let evenNumbers = []
arrayNumbers.forEach((numbers) => {
  if (numbers % 2 == 0) {
    evenNumbers.push(numbers)
  }
})
console.log(`The even numbers are : ${evenNumbers}`)
console.warn(
  '---------------------------5] Find the sum of all elements ---------------------------',
)
let sum = 0
arrayNumbers.forEach((numbers) => {
  sum = sum + numbers
})
console.log(`The sum of all elements is : ${sum}`)
console.warn(
  '---------------------------6] Find the even indexed value ---------------------------',
)
let evenIndex = []
arrayNumbers.forEach((numbers, index) => {
  if (index % 2 == 0) {
    evenIndex.push(numbers)
  }
})
console.log(`The even indexed values are :`, evenIndex)
