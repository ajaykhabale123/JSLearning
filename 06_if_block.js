console.log(`Start`);
var num= 10; 
if (num>0) {
    console.log(`Inside if`);
    console.log(`Number is positive ${num}`);
}
console.log(`End`);

var ageForVote = 20;
if (ageForVote>=18) {
    console.log(`You are eiligible for voting`);
    console.log(`Age is ${ageForVote}`);
}

console.log(`End of next if block`);

function checkEvenOdd(num){
    if (num%2==0) {
        return  "EVEN";
    }
    if (num%2!=0) {
        return "ODD";
        
    }
}
var result = checkEvenOdd(45);
console.log(`Given Number 45 is  ${result}`);
var result = checkEvenOdd(70);
console.log(`Given Number 70 is  ${result}`);

var num1=5;
if (num1>0) {
    console.log(`Number ${num1} is: Positive`);
} else {
    console.log(`Number ${num1} is: Negative`);
}
function maleMarriageEligibility(gender, age,boyName){
    if (gender=="Male" && age>=21) {
        console.log("You are eligible");
    } else {
        console.log("Not Eligible");
    }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");

function stringCut() {
    var open = `i_am_talking_about_our_future_idea's.:_5G_Broadbend`;
    var stringLenth = open.length;
    var stringNumber = stringLenth % 2 == 0 ?`we will get EVEN Number`:`we will get ODD Number`;
    var SubString = open.substring(stringNumber);
    return SubString;
  }
  var result = stringCut();
  console.log(result);