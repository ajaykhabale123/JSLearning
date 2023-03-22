


const array = [3, 4, 5, 6, 1];
        //    [5, 6, 7, 8, 3];
let arrayTransform = [];
array.forEach(element => {
    let newElement = element+2;
    arrayTransform.push(newElement)
});
console.log(arrayTransform);
console.log("Using Map Method ()");
const arrayNew = array.map((element)=>{
    return element + 2;
} )
console.log(arrayNew);

const arrayOfNames = ["Rupesh Dhumal","Rutuja Pawar", "Nayan", "Pralhad" ];
const arrayNamesTransformed = arrayOfNames.map(element => {
    return element.length
});
console.log(arrayNamesTransformed);

// 1. function can be stored in avariable(Function Expression)
// 2. function can be return from another function (Closure)
// 3. we can pass function as an arguments (callback)

let newarray = arrayNamesTransformed.map(element => {
    return element**2
});
console.log(newarray);

array.map(employee => {
    if (employee.company=="TCS") {
        return employee.name
    }
});
