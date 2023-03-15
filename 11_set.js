const setOfNums = new Set();
setOfNums.add(2);
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);
console.log("Find the Size");
console.log(setOfNums.size);
console.log("Delete the element");
setOfNums.delete(8);
console.log(setOfNums);

console.log("Find the values");
console.log(setOfNums.values());


console.log("Clear the set");
//console.log(setOfNums.clear);

console.log("Traverese");
for (const element of setOfNums) {
    console.log(element);
};
