// Spread Operator ...

const array = [ 1,2, 3, 5, 8 ,9];
console.log(array);
console.log(...array);

const student = {
    fullName : "Ajju Khabale",
    age:23,
    city: "Bergan"
}
console.log(student);
//console.log(...student);
//... Is also called as Rest Parameter
function show (arg1, ...arguments){
    console.log(arg1,arguments);
}
show(3, 4, 6, 8, 9);