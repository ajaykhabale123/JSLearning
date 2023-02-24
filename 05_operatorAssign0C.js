console.log("============ Step 1 ============");
function tcsEligibilty(gradScore, hscScore,sscScore,candidteName) {
   var result= gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congates ${candidteName} you are eligible for TCS interview`:
    `${candidteName} unfortunately you are not eligible for TCS interview`;
    console.log(result);
}
tcsEligibilty(80,86,90,"Ajay Khabale");
tcsEligibilty(70,65,55, "Aditya Ingale");
tcsEligibilty(60,79,88,"Shubham");