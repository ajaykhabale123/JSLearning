console.log("======================= Arrow Function Assignment =======================");
console.log("-------------1] Arrow Function with no args and no return value -------------");
let fun = ()=> console.log("Good Morning, Today is Monday");
fun();
console.log("-------------2] Arrow Function with args and no return value -------------");
let multiply = (num1, num2, num3=1)=>{
    const result = num1*num2*num3
    console.log(`The Multiplication of ${num1}, ${num2}, ${num3} is : ${result}`);
}
multiply(5, 5, 2);
multiply(10,4) ;
console.log("-------------3] Arrow Function with args and return value -------------");
let addition = (arg1, arg2, arg3, arg4, arg5)=>{
    const addResult = arg1 + arg2 + arg3 + arg4 + arg5;
    return addResult
}
let result = addition(100, 100, 200, 349, 756);
console.log(`The addition of given values is : ${result}`);
 result = addition("I am", " leraning", " ES6", " features", " in depth");
console.log(`The addition of given values is : ${result}`);