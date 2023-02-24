console.log(`=====Arithmetic Operators====`);
var num1=10;
var num2=2;
var result= num1+num2;// Addition
console.log(`Addition is ${result}`);

var result=num1-num2;// Subtraction
console.log(`Subtraction is ${result}`);

var result=num1*num2; //Multiplication
console.log(`Multiplication is ${result}`);

var result=num1**num2; //Exponential
console.log(`Exponential is ${result}`);

var result=num1/3; //Division
console.log(`Division is ${result}`);

var result=num1 % 3; //Modulus
console.log(`Reminder is ${result}`);

var num=10; //Compound Addition
num+=20;
console.log(`Compound Addition += ${num}`);

console.log(`Comparison Operator `);
var num3="10";
var num4=10;

console.log(`Equal Compare==${num3==num4}`);
console.log(`Strict equal Compare=== ${num3===num4}`);

console.log(`Is not equal to!= ${num3 != num4}`  ); //! not

console.log(`greater Than > ${10>20}`); // > greater than

console.log(`Less than < ${10<20}`); // <less than

var marks = 35; // >= Greater than equal 
console.log(`gretaer than equal >= ${marks >= 35}`);

var marks = 35; // >= Less than equal 
console.log(`gretaer than equal <= ${marks <= 35}`);

var marks=70;
var result = marks>=60 ? "Allow Him for Interview" : "Don't allow";
console.log(result);

var age=20;
var res= age >=21 ? true : false ;
console.log(res);

console.log("Even or Odd");
var myNumber = 7;
var result =  myNumber%2 == 0 ? "Even" : "Odd";
console.log(result);

var num1=10;
var num2=12;
var result= num1>num2 ? num1 : num2;
console.log(result);

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);

  console.log("Difference between == and === ");
  var num1 = 10;
  var num2 = "10";
  console.log(num1==num2); 
