console.log("===========if else block ===========");
console.log("---------- Step 1 ----------");
function maleMarriageEligibility(gender, age, boyName ) {
    if (gender="Male" && age>=21) {
        console.log(`Hey ${boyName} you are eligible for Marriage`);
    } else {
        console.log(`Hey ${boyName} you are Not Eligible for Marriage`);
    }
}
maleMarriageEligibility("Male",25, "Billgates");
maleMarriageEligibility("Male",17, "Stew Jobs");

console.log("---------- Step 2 ----------");
function femaleMarriageEligibility(gender, age, girlName) {
if (gender="Female" && age>= 18 ) {
    console.log(`Hey ${girlName} you are eligible for marriage`);
} else {
    console.log(`Hey ${girlName} you are Not eligible for marriage`);
}
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");