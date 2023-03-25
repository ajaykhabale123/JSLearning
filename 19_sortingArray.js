



const arrayOfNames = ["Elon", "Ratan", "Billgates", "PT Usha", "Murmu"];
console.log(arrayOfNames);
console.log("======== After Sorting ========");
const sortedArrray = arrayOfNames.sort();
console.log(sortedArrray); // sorting in ascending order
sortedArrray.push("Sundar");
console.log(sortedArrray);
console.log(arrayOfNames);
sortedArrray.reverse();
console.log(sortedArrray); // sorting in descending order

// const student = "Avinash";
// student[1]= "w";
// console.log(student);

console.log("========== Sorting array of numbers ========== ");
const array = [5, 6, 3, 44, 104, 302, 15];
console.log(array);
array.sort();
console.log(array);
// custom logic to sort the elements in Ascending order
array.sort((a, b)=>{
    return a > b ? 1 : -1 ;
});
console.log(array);
//Descending order
array.reverse();
console.log(array);
array.sort((a, b)=>{
    return a > b ? -1 : 1 ;
});
console.log(array);
// custom logic to sort the elements in descending order
const arrayNum = [56, 3, 4, 78, 23, 32];
arrayNum.sort((a, b)=>{
return a > b ? -1 : 1 ;
})
console.log(arrayNum);

//flatMap