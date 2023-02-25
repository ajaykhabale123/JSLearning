console.log("========== if Block ========== ");
console.log("---------- Step 1 ----------");
function checkOddEven(value){
    if (value%2==0) {
        return "EVEN";
    }
    if (value%2!=0) {
        return "ODD";
    }
}
var result = checkOddEven(45);
console.log(`1.1 The given number 45 is: ${result}`);
var result = checkOddEven(70);
console.log(`1.2 The given number 70 is: ${result}`);
var result = checkOddEven(67);
console.log(`1.3 The given number 67 is: ${result}`);
var result = checkOddEven(98);
console.log(`1.4 The given number 98 is: ${result}`);

console.log("---------- Step 2 ----------");
function ageForVote (age){
    if (age>=18) {
        return `The age ${age} you are eligible for vote.`
    }
    if (age<18) {
        return `The age ${age} you are not eligible for vote.` 
    }
}
var result = ageForVote(18)
console.log(result);
var result = ageForVote(20)
console.log(result);
var result = ageForVote(17)
console.log(result);
var result = ageForVote(40)
console.log(result);

console.log("---------- Step 3 ----------");
function stringChar(value) {
    if (value.length>10) {
        return `The ${value} contains more than 10 characters`
    }
    if (value.length=!10) {
        return `The ${value} does not contain more than 10 characters`
    }
}
var result= stringChar("JavaScript-ES6");
console.log(result);

console.log("---------- Step 4 ----------");
function stringStarts(value) {
    if (value.startsWith("Java")) {
        console.log(`"Yes" string '${value}' start with word "Java"`);
    }
    if (value.startsWith(!"Java")) {
        console.log(`"No" string '${value}' does not start with word "Java"`);

    }
}
stringStarts( "JavaScript Language" )