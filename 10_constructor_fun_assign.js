console.log('================ Constructor Function Asignment ================')
function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName
  this.location = location
  this.ifscCode = ifscCode
  this.branchCode = branchCode
  this.bankDetails = function () {
    console.log(
      `Bank Name : ${this.bankName}, Location : ${this.location}, IFSC : ${this.ifscCode}, Branch Code : ${branchCode}`,
    )
  }
}
Bank.prototype.OpenTime = '9 AM IST'
Bank.prototype.closeTime = '6 PM IST'
console.log('========= Bank Details ===========')
const yesBank = new Bank('Yes Bank', 'Sangola', 'YEID346500', 'YES9756323')
yesBank.bankDetails()
const sbiBank = new Bank(
  'State Bank of India',
  'Solapur',
  'SBI000234',
  'SB494020',
)
sbiBank.bankDetails()
const mahBank = new Bank(
  'Maharashtra Bank',
  'Pandharpur',
  'MAH000221',
  'MH2392122',
)
mahBank.bankDetails()
const axisBank = new Bank('Axis Bank', 'Pune', 'AXS000978', 'AX0025678')
axisBank.bankDetails()
console.log(
  '=============================================================================================',
)
console.log(
  `SBI Bank ==> Open Time : '${sbiBank.OpenTime}' & Close Time : '${sbiBank.closeTime}'`,
)
console.log(
  '=============================================================================================',
)
console.log(
  `Bank Name : ${axisBank.bankName} & Close Time : ${axisBank.closeTime}`,
)
console.log(
  '=============================================================================================',
)
console.log(
  `Bank Name : ${yesBank.bankName} , Branch Code : ${yesBank.branchCode} & Open Time : ${yesBank.OpenTime} `,
)
