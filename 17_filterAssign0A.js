const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Given array", arrayNumbers);
console.log("Condition 1] ==>> Find the numbers which are greater then 50 ");
const greaterArray = arrayNumbers.filter(number => number> 50);
console.log(greaterArray);
console.log("Condition 2] ==>> Find the even numbers ");
const evenNumbers = arrayNumbers.filter(number => number%2==0);
console.log(evenNumbers);
console.log("Condition 3] ==>> Find the odd numbers ");
const oddNumbers = arrayNumbers.filter(number => number%2!=0);
console.log(oddNumbers);
console.log("Condition 4] ==>> Find the numbers which are multiple of 5");
const multipleOf5 = arrayNumbers.filter(number => number%5==0);
console.log(multipleOf5);
console.log("Condition 5] ==>> Find the numbers which are multiple of 5");
const between = arrayNumbers.filter(number => (number >20 && number < 50))
console.log(between);