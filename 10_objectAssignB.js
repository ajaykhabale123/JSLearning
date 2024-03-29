const bankSbi = {
  bankName: 'State Bank Of India',
  ifsc: 'SBI0002345',
  accountNo: '0076586232',
  branchCode: 'SB00234',
}
const bankLocation = {
  street: 'Gandhi Road',
  city: 'Mumbai',
  pincode: 411002,
}
console.log(
  '------------ Clonning object by using Object.assign --------------',
)
const objectAssignBankSbi = Object.assign({}, bankSbi)
const objectAssignBankLocation = Object.assign({}, bankLocation)
console.log(
  `Bank Name : ${objectAssignBankSbi.bankName}, IFSC : ${objectAssignBankSbi.ifsc}, Account No : ${objectAssignBankSbi.accountNo}, Branch Code : ${objectAssignBankSbi.branchCode}`,
)
console.log(
  `Street : ${objectAssignBankLocation.street}, City : ${objectAssignBankLocation.city}, PIN : ${objectAssignBankLocation.pincode}`,
)
console.log(
  '------------ Cloning object by using spread operator -------------',
)
const cloneBankSbi = { ...bankSbi }
const cloneBankLocation = { ...bankLocation }
console.log(
  `Bank Name : ${cloneBankSbi.bankName}, IFSC : ${cloneBankSbi.ifsc}, Account No : ${cloneBankSbi.accountNo}, Branch Code : ${cloneBankSbi.branchCode}`,
)
console.log(
  `Street : ${bankLocation.street}, City : ${bankLocation.city}, PIN : ${bankLocation.pincode}`,
)

const rateOfInterest = {
  homeLoanInterest: 10,
  personalLoanInterest: 8,
  dueInterest: 15,
}
console.log('------------ Merged All Objects using Object.Assign --------------')

const sbiDetails = Object.assign({},bankSbi, bankLocation, rateOfInterest)
console.table(sbiDetails)
console.log('------------ Traverse Object using loop --------------')
for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key]
    console.log(`${key}: ${element}`)
  }
}
console.log("Merged By Using spread operator");
const result = {...bankSbi, ...bankLocation, ...rateOfInterest}
console.table(result);