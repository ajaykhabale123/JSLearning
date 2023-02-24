console.log("============== Implicit conversion to string ==============");
console.log("Numeric string used with + gives string type ");
var result;
result = '3'+ 2;
console.log(result);
result= '3' + true ;
console.log(result);
result = '3' + undefined ;
console.log(result); 
result = '3' + null;
console.log(result);

console.log("============== Implicit boolean conversion to Number ==============");
console.log("If Boolan is used true is 1, false is 0");
var result;
result= '4'- true;
console.log(result);
result= 4 + true;
console.log(result);
result = 4 + false;
console.log(result);

console.log("============== Implicit string conversion to number ==============");
console.log("Numeric string used with - , / , * results number type ");
var result;
 result = '4'-'2';
 console.log(result);
result = '4'- 2; 
console.log(`,`, result);
result = '4'* 2;
console.log(result);
result = '4'/2;
console.log(result);

console.log("============== Undefined used with number, boolean or null given NaN ==============");
console.log("Arithmetic operation of undefined with number , boolean or null gives Nan");
var result;
result = 4 + undefined;
console.log(result);
result = 4 - undefined;
console.log(' ', result);
result = true + undefined ;
console.log(result);
result = null + undefined;
console.log(' ', result);

console.log("============== Explicit Conversion ==============");
console.log("Convert number strings and boolean values to numbers ");
console.log("In that case we can use Number();");
console.log("String to number ");
result = Number('324');
console.log(result);
result= Number('324e-1');
console.log(result);
console.log("Boolean to number");
result = Number(true);
console.log(result);
result = Number(false);
console.log(result);

console.log("Explicit Conversion: Invalid string to number return NaN");
console.log("If a string is an invalid number, the result will be NaN ");
var result ;
result = Number('hello');
console.log(result);
result = Number(undefined);
console.log(" ",result);
result = Number(NaN);
console.log(result);

console.log("Explicit Conversion: String to number using + operator ");
var numberInString = "100"
console.log(typeof numberInString);
var myNumber = +numberInString;
console.log(typeof myNumber);

console.log("Explicit Conversion: Number to string data type conversion using toString() method ");
var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);
