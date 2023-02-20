
//function with no arguments and no return value 
function showFullName(){
console.log("My full name is: Ajay Khabale");
}
showFullName();// function call or invoke 

//function with arguments and no return value 
function showAge(age){
    console.log("My age is:",age);
}
showAge(32);

//Function with no arguments and  return value
function fullName(){
    var name= "Ajay Khabale";
    return name;
}
var fName= fullName();
console.log(fName);

//Function with arguments and return value
function sumOfNumbers(num1, num2, num3){
   var sum = num1 + num2 + num3;
    return sum;
}
var sumResult= sumOfNumbers(10, 45, 79)
console.log(sumResult);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; 
var str2 = "Cutie"; 

var name1= "Akshay";
var name2 = "Sachin";

function swapVariables(value1, value2) {
    console.log("Before Swap", value1, value2);
    var temp=value1
    value1=value2
    value2=temp
    console.log("After Swap:", value1, value2);
    return "swapping variables successfully completed";

}
var swapResult = swapVariables(num1, num2); // Function call or Function invoke
  console.log(swapResult);
  
  var swapResult2 =  swapVariables(str1, str2);
  console.log(swapResult2);
  var swapResult2 =  swapVariables(name1,name2);
  console.log(swapResult2);