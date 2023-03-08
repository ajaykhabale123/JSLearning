console.log("===== Object Literals ======");
let student = {
    firstName : "Ajay",
    lastName : "Khabale" ,
    isWorking : true,
    age : 23,
    collegeName : "ABC",
    id : 12345
};
console.log(student);
console.log(typeof student);

console.log("// For accesing property ===> ");// . Dot notation 
console.log(student.firstName);
console.log(student.age);
// [] Notation
console.log(student["lastName"]);

console.log("//Update property ==>");
student.collegeName= "COEP PUNE";


console.log("// Add new property ==> city : Mumbai");
student.city= "Mumbai";
student.country = "India";
console.table(student);

console.log("// Delete One Property");
delete student.isWorking
console.table(student);

console.log("// Empty Object" );
let teacher = {

}
teacher.firstName= "Mohit";
console.log(teacher);