console.log('============= Step 1 =============')
function voteEligibilty(age) {
  if (age <= 0 || age >= 120 || age == undefined || age == null) {
    console.log(
      `Your "${age}" age is invalid data. Please provide the Valid data. `,
    )
    return
  }
  if (age >= 18) {
    console.log(`Yes: Your "${age}" age is eligible for voting`)
  } else {
    console.log(`No: Your "${age}" age is Not eligible for voting`)
  }
}

voteEligibilty(45);
voteEligibilty(17);
voteEligibilty(8);
voteEligibilty(20);
voteEligibilty(-10);
voteEligibilty(200);
voteEligibilty(0);
voteEligibilty(undefined);
voteEligibilty(null);

console.log('============= Step 2 =============')
function gradeCalculation(marks) {
  if (
    marks <= 0 ||
    marks > 100 ||
    typeof marks != 'number' ||
    marks == undefined ||
    marks == null ||
    isNaN( marks)
  ) {
    console.log(
      `Your marks is ${marks}, it's invalid, so Please provide the valid marks`,
    )
    
  } else{ 
    if (marks >= 90 && marks <= 100) {
      console.log(`Funtastic marks : ${marks}, Your grade is "A+"`)
    }
    if (marks >= 75 && marks < 90) {
      console.log(`Excellent marks ${marks},Your grade is "A"`)
    }
    if (marks >= 50 && marks < 75) {
      console.log(`Good marks ${marks}, Your grade is "B"`)
    }
    if (marks >= 35 && marks < 50) {
      console.log(`Marks is ${marks}, Your garde is "C", Need Improvement`)
    }
  }
  
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation('91');
gradeCalculation('Eighty');
gradeCalculation(NaN);
gradeCalculation(null);
gradeCalculation(undefined);
