console.log("===== Object Literals ======");
let student = {
    firstName : "Ajay",
    lastName : "Khabale" ,
    isWorking : true,
    age : 23,
    collegeName : "ABC",
    id : 12345,
    adress : {
        street : "Wakad",
        city : "Pune",
        PIN : "431204",
    },
    school : "Podar School",
    friends : ["Bill", "Stew", "Elon" ],
    show : function (){
        console.log(" I am show () function");
    },
    adressDetails: function (){
        this.adress
       return `Adress is : Street - ${this.adress.street}, City - ${this.adress.city}, PIN - ${this.adress.PIN}`
    }
};

console.log(student);
console.log("TypeOf check");
console.log(typeof student.id);
console.log(typeof student.adress);
console.log(typeof student.age);
console.log(typeof student);

console.log("// For accesing property ===> ");// . Dot notation 
console.log(student.firstName);
console.log(student.age);
console.log(student.adress.city);
console.log(student.friends.slice(2));
console.log(student.friends[student.friends.length-1]);

// [] Notation
console.log(student["lastName"]);

console.log("//Update property ==>");
student.collegeName= "COEP PUNE";

console.log("// How to Update property in nested object  ==>");
student.adress.PIN= "431205";

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

console.log("How to add object in object");
student.marks = {
    maths : 80,
    physics : 60,
    drawing : 70,
}
console.table(student.marks);

console.log("How to add function in the object");
let show = function (){
    console.log(" I am show () function");
}
student.show; function name(params) {
    
}
student.show();
console.log("concat function");
let resultAddress =  student.adressDetails();
console.log(resultAddress);
