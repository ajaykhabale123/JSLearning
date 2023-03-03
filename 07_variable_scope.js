var firstName; // Variable Declaration
firstName = "Virat"; // Variable Initialization

var lastName= "Kohli"; // Variable Declaration and Initialization on same line
firstName = "King Kohli"; // Variable Update

var firstName; // Variable Re-declaration
console.log(firstName);

let city;// Variable Declaration
city = "Delhi"; // Variable Initialization 

// let city= "Mumbai";  // Re-declaration of let variable is not allowed 

const PI = 3.14; // We use the const variable when variable and its value is fixed
// PI = 3.56; // Update or Modify not Allowed in const
console.log(PI);
// const PI = 3.142; // Re-declaration of const variable is not allowed 

var num =10;
if (num==10) {
    let word = "Revision is the mother of success";// the variable declared  by using let or const  keywords it's a block-scoped.
}
console.log(word);

function sayHi(){
    var greet = "Hi Good Morning";// the variable declared  by using var keywords it's a function-scoped.
}
sayHi();
//console.log(greet);

// var fullName = "MS Dhoni"
// if (false) {
    
// } else {
//     var age = 37;
// }
// console.log(age);

function fun (num){
let factorial = 1;
{
factorial = factorial * index
}
}
fun(5)
//}`);