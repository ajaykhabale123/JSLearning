


const array = [3, 4, 5, 8, 90, 50, 1, 44];
let newArray = [];
array.forEach(element => {
    if (element>=50) {
        newArray.push(element)
    }
});
console.log(newArray);

console.log("filter method()");
const filterArray = array.filter((currentvalue)=>{
    return currentvalue>=50;
})
console.log(filterArray);
console.log("on one line");
const arrayElement = array.filter(currentValue =>  currentValue>=50)
console.log(arrayElement);

const evenNumbers = array.filter(currentvalue => currentvalue%2==0)
console.log(evenNumbers);
