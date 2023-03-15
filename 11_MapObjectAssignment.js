class Bank {
  constructor(bankName, location, accountNo, ifsc, interestRate) {
    ;(this.bankName = bankName),
      (this.location = location),
      (this.accountNo = accountNo),
      (this.ifsc = ifsc),
      (this.interestRate = interestRate)
  }
}
const axis_bank = new Bank(
  'Axis Bank',
  'Pune',
  '0067584322',
  'AXS0000446',
  '15%',
)
const sbi_bank = new Bank(
  'State Bank of India',
  'Mumbai',
  '089312456',
  'SBI000234',
  '13%',
)
const icici_bank = new Bank(
  'ICICI Bank',
  'Solapur',
  '0869435644',
  'ICI00002353',
  '11%',
)
const kotak_bank = new Bank(
  'Kotak Mahindra Bank',
  'Sangola',
  '034867603056',
  'KOT00045764',
  '10%',
)
const hdfc_bank = new Bank(
  'HDFC Bank',
  'Pandharpur',
  '009845673902',
  'HDF000023474',
  '11%',
)
const panjab_bank = new Bank(
  'Punjab National Bank',
  'Pune',
  '009783245611',
  'PNB00086231',
  '13%',
)
console.log(
  '------------------------ Created Object Using Class ------------------------',
)
console.log(axis_bank)
console.log(sbi_bank)
console.log(icici_bank)
console.log(kotak_bank)
console.log(hdfc_bank)
console.log(panjab_bank)
console.log(
  '================================== Created MAP using Key and value ==================================',
)
const mapOfBank = new Map()
mapOfBank.set(axis_bank.accountNo, axis_bank)
mapOfBank.set(sbi_bank.accountNo, sbi_bank)
mapOfBank.set(icici_bank.accountNo, icici_bank)
mapOfBank.set(kotak_bank.accountNo, kotak_bank)
mapOfBank.set(hdfc_bank.accountNo, hdfc_bank)
mapOfBank.set(panjab_bank.accountNo, panjab_bank)

console.log(mapOfBank)
console.log(
  '================================== Traversing MAP ==================================',
)
const traverseBank = mapOfBank.keys()
for (const key of traverseBank) {
  const bank = mapOfBank.get(key)
  console.log(
    `Bank Details: Bank Name : ${bank.bankName}, Account No : ${bank.accountNo}, Interest Rate : ${bank.interestRate}`,
  )
}
