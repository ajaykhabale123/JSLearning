function display(args) {
    console.log(args*args);
}
display(30);

var num = 100;
console.log(num);
var show = function (args){
    console.log(`Hi Good Morning`);
}
show();
console.log(typeof show);
// Function Expression - FE
var sum = function (arg1, arg2){
    console.log(arg1+ arg2);
    return arg1 * arg2;
}
var result= sum(100,200); 
console.log(result);