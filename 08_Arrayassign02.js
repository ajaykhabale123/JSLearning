const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(arrayNumbers)
console.log(`1.1] Total Number of elements is : ${arrayNumbers.length}`)
console.log(
  '------------------------------------------------------------------',
)
console.log(
  `1.2] The First element is : '${
    arrayNumbers[0]
  }' and The last element is : '${arrayNumbers[arrayNumbers.length - 1]}' `,
)
console.log(
  '------------------------------------------------------------------',
)
console.log(
  `1.3] The Third last element is: '${arrayNumbers[arrayNumbers.length - 3]}'`,
)
console.log(
  '------------------------------------------------------------------',
)
array = []
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index]
  if (element % 2 == 0) {
    array.push(element)
  }
}
console.log(`1.4] The Even Numbers in given array : `)
console.log(array)
console.log(
  '------------------------------------------------------------------',
)
array = []
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index]
  if (element % 2 != 0) {
    array.push(element)
  }
}
console.log(`1.5] The Odd Numbers in given array : `)
console.log(array)
console.log(
  '------------------------------------------------------------------',
)
array = []
let sumOfEven = 0
for (let index = 0; index < arrayNumbers.length; index = index + 2) {
  const element = arrayNumbers[index]
  array.push(element)
  sumOfEven = sumOfEven + element
}
console.log(`1.6] All even positioning elements: ${array}`)
console.log(`     Sum of an Even positioning elements is : ${sumOfEven}`)
console.log(
  '------------------------------------------------------------------',
)
array = []
let sumOfOdd = 0
for (let index = 1; index < arrayNumbers.length; index = index + 2) {
  const element = arrayNumbers[index]
  array.push(element)
  sumOfOdd = sumOfOdd + element
}
console.log(`1.7] All Odd positioning elements: ${array}`)
console.log(`     Sum of an Odd positioning elements is : ${sumOfOdd}`)
console.log(
  '------------------------------------------------------------------'
)
let sumOfElements = 0
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index]
  sumOfElements = sumOfElements + element
}
console.log(`1.8] Sum of All elements is : ${sumOfElements}`)
console.log(
  '------------------------------------------------------------------',
)
array = []
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index]
  if (element % 5 == 0) {
    array.push(element)
  }
}
console.log(`1.9] Those Numbers are multiple of 5 : `)
console.log(array)
console.log(
  '------------------------------------------------------------------',
)
console.log(
  `1.10] The 115 is available in given array : ${arrayNumbers.includes(115)}`,
)
console.log(
  '------------------------------------------------------------------',
)
console.log(
  `1.11] The 23 is available in given array : ${arrayNumbers.includes(23)}`,
)
console.log(
  '------------------------------------------------------------------',
)
arrayNumbers.splice(3, 0, 55, 66)
console.log(`1.12] Insert Numbers 55,66 before index 3: `)
console.log(arrayNumbers)
console.log(
  '------------------------------------------------------------------',
)
arrayNumbers.splice(4, 3)
console.log(`1.13] Delete 3 elements starting from index 4 : `)
console.log(arrayNumbers)
