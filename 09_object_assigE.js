console.log('================= Object Assignmennt E =================')
const sbiBank = {
  bankName: 'State Bank of India',
  location: 'PUNE',
  accountNo: 065723340400132,
  ifsc: 'BKID0000657',
  interestRate: '12 %',
  showdetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account No is : ${this.accountNo}, IFSC Code : ${this.ifsc}, Interest Rate is ${this.interestRate}`,
    )
  },
}
sbiBank.showdetails()
console.log(
  '-----------------------------------------------------------------------------------------------------------------',
)
const axisBank = {
  bankName: 'Axis Bank',
  location: 'Mumbai',
  accountNo: 998877664400123,
  ifsc: 'UTIB0000769',
  interestRate: '7 %',
  showdetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account No is : ${this.accountNo}, IFSC Code : ${this.ifsc}, Interest Rate is ${this.interestRate}`,
    )
  },
}
axisBank.showdetails()
console.log(
  '-----------------------------------------------------------------------------------------------------------------',
)
const hdfcBank = {
  bankName: 'HDFC Bank',
  location: 'Solapur',
  accountNo: 6677445500198,
  ifsc: 'HDFC0000635',
  interestRate: '5 %',
  showdetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account No is : ${this.accountNo}, IFSC Code : ${this.ifsc}, Interest Rate is ${this.interestRate}`,
    )
  },
}
hdfcBank.showdetails()
console.log(
  '-----------------------------------------------------------------------------------------------------------------',
)
const yesBank = {
  bankName: 'YES Bank',
  location: 'SANGOLA',
  accountNo: 08769540000234,
  ifsc: 'YESB0BMSB13',
  interestRate: '10 %',
  showdetails: function () {
    console.log(
      `Bank Name: ${this.bankName}, Location: ${this.location}, Account No is : ${this.accountNo}, IFSC Code : ${this.ifsc}, Interest Rate is ${this.interestRate}`,
    )
  },
}
yesBank.showdetails();


