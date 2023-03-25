const arrayRollNumbers = [ 113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]
console.log(`Given Array`, arrayRollNumbers);
console.log("1] Reverse the array");
console.log("==>",arrayRollNumbers.reverse());
console.log("2] Use the Sort as it is");
console.log("==>",arrayRollNumbers.sort());
console.log("3] Sort the array in ascending order");
arrayRollNumbers.sort((a,b)=>{
    return a > b ? 1 : -1
})
console.log("==>",arrayRollNumbers);
console.log("4] Find the greatest number from the array");
console.log("==>",arrayRollNumbers[arrayRollNumbers.length-1]);
console.log("5] Find the smallest number from the array");
console.log("==>",arrayRollNumbers[0]);
console.log("6] Remove duplicates from array");
const set = new Set (arrayRollNumbers)
console.log(`After removing duplicates `,set);