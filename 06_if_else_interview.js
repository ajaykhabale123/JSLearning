console.log('============== Step 1 ===========')
function tcsEligibility(gradScore, hscScore, sscScore, candidteName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(`Congates ${candidteName} you are eligible for TCS interview`)
  } else {
    console.log(
      `${candidteName} unfortunately you are not eligible for TCS interview`,
    )
  }
}
tcsEligibility(80, 86, 90, 'Ajay Khabale');
tcsEligibility(70, 65, 55, 'Aditya Ingale');
tcsEligibility(60, 79, 88, 'Shubham');
