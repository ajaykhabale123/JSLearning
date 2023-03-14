const arrayOfNumber = [4, 5, 6, 7, 8, 3 ]
console.log(typeof arrayOfNumber);
const newArrayOfnumber = arrayOfNumber ; // shallow clone
newArrayOfnumber.push(100)
console.log(newArrayOfnumber);
console.log(arrayOfNumber);


const array = [ 5, 6, 7, 2, 1];
const clonedArray = [ ...array ]  // Deep clone
// clonedArray.pop(); // remove last element from the array

console.log("------- Merging an Array --------");
const evenArray = [ 2, 4, 6, 8]
// first way
console.log(array + evenArray);
// second way 

const mergedArray = array + evenArray;
console.log(" " ,mergedArray);
console.log(typeof mergedArray);
// Third Way using concat method
const concatArray = array.concat(evenArray);
console.log(concatArray);
console.log(typeof concatArray);

// Fourth Way using spread operator
const result =  [...array , ...evenArray];
console.log(result);
console.log(typeof result);


let student = {
    fullName : "Virat Kohli",
    age : 33,
    address : {
        street : "AS Club",
        city : "Pune",
        PIN : 413202,
    }
}

student = { }
console.log(student);