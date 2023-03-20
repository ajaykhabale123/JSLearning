'use strict'
//myName = "Virat"; // Not allowed
let myName = "Virat";
console.log(myName);
// delete myName; //  Not allowed

//  person = {  // Not allowed to define an object without var, let and const
//     firstName: "Virat",
//     lastName: "Kohli",
//     age : 33
// }

let student = {
    rollNo: 34,
    age: 17,
    city: "PUNE"
}
student = null;
// delete student; // Not allowed in strict mode
console.log(student);

