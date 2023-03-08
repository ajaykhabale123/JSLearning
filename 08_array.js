let aksahyFN = " Akshay Ghule";
let nayanFN = "Nayan Patil";
//Array can allow Homogenous and heterogenous element;
//Array can allow duplicate elememnts means same values allow;
//

var arrayOfNumbers = [0, 2, 4, 5, 6, 7, 8,"Nine",  "Ten", true, 4, 0, 8] ;
console.log(arrayOfNumbers);
//console.table(arrayOfNumbers);

const totalArrayElements= arrayOfNumbers.length;
console.log(`Total elements available in Array is: ${totalArrayElements}`);
console.log("Element Is Available or not");
const is8Available= arrayOfNumbers.includes(8);
console.log(`Is 8 Avialable: ${is8Available}`);

const is9Available= arrayOfNumbers.includes(9);
console.log(`Is 9 Avialable: ${is9Available}`);
console.log("To find the element at that index");
const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `);

var arrayOfNumbers= [10, 20, 25, 15, 30, 5];
const valueAtIndex2= arrayOfNumbers[2];
console.log(`Value at Index 2 is: ${valueAtIndex2}`);
console.log("Modification Element");
arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);

arrayOfNumbers[1] = 50;
console.log(arrayOfNumbers);

var arrayOfNumbers= [10, 20, 25, 15, 30, 5];

console.log("===push Method- Adding Element in the last===");
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log("===unshift Method- Adding Element in the First===");
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

var arrayOfNumbers= [10, 20, 25, 15, 30, 5];
console.log(arrayOfNumbers);
console.log("===pop Method-Removing Last Element===");
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log("===shift Method-Removing First Element===");
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers= [10, 20, 25, 15, 30, 5, 40, 45];
console.log("Slice Method==>slice(startIndex)");
const arrayFromIndex3= arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log("Slice Method==>slice(startIndex, endIndex)");
const subArray= arrayOfNumbers.slice(2,5);
console.log(subArray);

var arrayOfNumbers= [10, 20, 25, 15, 30, 5, 40, 45];
console.log("splice Method==> splice(startIndex)");
console.log(arrayOfNumbers);
const splicedArray= arrayOfNumbers.splice(3);
console.log(`Removed Element From Array is:${splicedArray}`);
console.log(`Remaining elements ${arrayOfNumbers}`);

var arrayOfNumbers= [10, 20, 25, 15, 40, 45];
console.log("splice Method==> splice(startIndex, endIndex)");
console.log(arrayOfNumbers);
const splicedArrayWithDeleteCount= arrayOfNumbers.splice(2,2);
console.log(`Removed Element using delete count`,splicedArrayWithDeleteCount);
console.log(arrayOfNumbers);

var arrayOfNumbers= [10, 20, 25, 15, 40, 45];
const element= arrayOfNumbers.splice(1,1);
console.log(element);
console.log(arrayOfNumbers);


var arrayOfNumbers= [10, 20, 25, 15, 40, 45];
const splice= arrayOfNumbers.splice(3,1);
console.log(splice);
console.log(arrayOfNumbers);

var arrayOfNumbers= [10, 20, 25, 15, 40, 45];
const remove= arrayOfNumbers.splice(1,2);
console.log(remove);
console.log(arrayOfNumbers);

console.log("========splice () to insert one elements without replacing existing element =======");
var arrayOfNumbers= [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2,0,22);
console.log(arrayOfNumbers);

console.log("========splice () to insert multiple elements without replacing existing element =======");
var arrayOfNumbers= [10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
//5,35,55;
arrayOfNumbers.splice(4,0,5,35,55);
console.log(arrayOfNumbers);

console.log("========splice () to replace one elements =======");
var arrayOfNumbers= [10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
arrayOfNumbers.splice(2,2 ,50,60)
console.log(arrayOfNumbers);

console.log("=========Traversing==========");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

console.log("=========Sum of Elements ==========");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    sum = sum + element;
}
console.log(`Sum of an array element is : ${sum}`);

console.log("=========Sum of even Elements ==========");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sumOfEven = 0;
for (let index = 0; index < arrayOfNumbers.length; index= index+2) {
    const element = arrayOfNumbers[index];
    sumOfEven = sumOfEven + element;
}
console.log(`Sum of an array even element is : ${sumOfEven}`);

