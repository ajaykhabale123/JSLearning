// Arrow Function with no arguments and no return value
let show = ()=>{
    console.log("Arrow Function");
}
show();

let show_ = ()=> console.log("Arrow Function");

show();


// Arrow function with arguments and no return value
let add = ( num1, num2)=> {
    console.log(num1 + num2);
    
}
add (10,20);

// Arrow function with arguments and with return value
let multiply = (num1, num2)=> {
   const result = num1*num2 ;
   return result;
}
const multiplyResult =  multiply(40, 5);
console.log(multiplyResult);

let multiplyRes = (num1, num2) =>  num1 * num2;
console.log(multiplyRes(30, 5));