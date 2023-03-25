


const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51];
let sum = 0;
array.forEach(element => {
    sum= sum + element
});
console.log(sum);
console.log("reduce method()");
let sumOfArrayElement = array.reduce((runningTotal, value)=>{
    return runningTotal + value
});
console.log(sumOfArrayElement);
// Find the even numbers from the given array and sum it
let evenNumbers = array.filter(elements=> elements%2==0);
console.log(evenNumbers);
let sumOfEven = evenNumbers.reduce((runningTotal, value,)=>{
    return runningTotal + value
})
console.log(sumOfEven);

const arrayNums = [3, 4, 12, 8, 90, 50, 1, 15, 78, 21 ]
console.log(" find the numbers which are multiple of 3 from the array and sum it");
// find the numbers which are multiple of 3 from the array and sum it
let sumTotal = arrayNums.filter(element=> element%3==0)
.reduce((runningTotal, value)=>runningTotal + value );
console.log(sumTotal);

