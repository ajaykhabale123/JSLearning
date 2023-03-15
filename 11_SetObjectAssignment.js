class Bank {
  constructor(bank_name, location, account_no, ifsc, interest_rate) {
    ;(this.bank_name = bank_name),
      (this.location = location),
      (this.account_no = account_no),
      (this.ifsc = ifsc),
      (this.interest_rate = interest_rate)
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
  '==================== Add all object elements in a Set ====================',
)
const setOfBanks = new Set()
setOfBanks.add(axis_bank)
setOfBanks.add(sbi_bank)
setOfBanks.add(icici_bank)
setOfBanks.add(kotak_bank)
setOfBanks.add(hdfc_bank)
setOfBanks.add(panjab_bank)
console.log(setOfBanks)
console.log(
  '==================== Traverse Set using for of loop ====================',
)
for (const element of setOfBanks) {
  console.log(
    `Bank Details ==> Bank Name : ${element.bank_name}, Location : ${element.location}`,
  )
}
