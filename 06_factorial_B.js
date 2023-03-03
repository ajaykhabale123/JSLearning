console.log('=============== Assignment B ===============')
function factorialOfWordsCount(word) {
  if (word == null || word == undefined || word == '' || word == NaN) {
    return `Given string "${word}". The string is Invalid, Please provide the Valid String.`
  }
  let splitWord = word.split(' ')
  let totalWord = splitWord.length
  let factorial = 1

  for (let index = totalWord; index >= 1; index--) {
    factorial = factorial * index
  }
  return `Given String: "${word}"
    Total words: '${totalWord}'. The factorial is: '${factorial}'.`
}
var result = factorialOfWordsCount('Revision is the mother of Success')
console.log('B.1]', result)
console.log('-------------------------------------------------------')
var result = factorialOfWordsCount('We never fail, we always learn')
console.log('B.2]', result)
console.log('-------------------------------------------------------')
var result = factorialOfWordsCount(null)
console.log('B.3]', result)
console.log('-------------------------------------------------------')
var result = factorialOfWordsCount('')
console.log('B.4]', result)
console.log('-------------------------------------------------------')
var result = factorialOfWordsCount('Ajay Jalindar Khabale')
console.log('B.5]', result)
console.log('-------------------------------------------------------')
