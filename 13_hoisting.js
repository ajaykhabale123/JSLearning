console.log(myName);// Allowed to access
//console.log(age); // Not allowed to acess
var myName = "Virat Kohli";
let age = 33;

show(); // Allow to acess because of This noral Function is hoisted 
function show(){
    console.log("show() function");
}

//greet(); // This Fun expression is not allow to acess. fun expression doesnot hoisted
let greet = function(){
    console.log("Good Morning");
}
greet();