const arrayNumbers = [ 20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Given Array :", arrayNumbers);
console.log("-----------------------------------------------------");
console.log("Condition 1] ==> Find the sum of all numbers");
const sumNum = arrayNumbers.reduce((runningTotal, value)=>{
    return runningTotal + value
})
console.log(sumNum);
console.log("-----------------------------------------------------");
console.log("Condition 2] ==> Find the numbers multiple of 5 & sum it");
let multiple5 = arrayNumbers.filter(element => element%5==0)
.reduce((runningTotal,value)=>{
    return runningTotal + value
})
console.log(multiple5);
