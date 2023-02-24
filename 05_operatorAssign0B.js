console.log("============ Step 1 ============");
function maleMarriageEligibility(gender, age, boyName ) {
  var result=  gender="Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are Not Eligible for Marriage`;
  return result;
}
var eligible=  maleMarriageEligibility("Male",25, "Billgates");
console.log(eligible);
var eligible=  maleMarriageEligibility("Male",17, "Stew Jobs");
console.log(eligible);

console.log("============ Step 2 ============");
function femaleMarriageEligibility(gender, age, girlName) {
    var result = gender="Female" && age>= 18 ? `Hey ${girlName} you are eligible for marriage`:`Hey ${girlName} you are Not eligible for marriage`;
    return result;
}
var eligible= femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(eligible);
var eligible= femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(eligible);
