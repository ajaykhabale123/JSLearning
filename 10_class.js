class Bank {
    constructor (bankName, location, account, ifsc, interestRate ){
    this.bankName= bankName;
    this.location = location;
    this.account = account;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
    }
    showDetails (){
        console.log(`Bank Details: ${this.bankName},  ${this.location},  ${this.account},  ${this.ifsc},  ${this.interestRate}`);
    }

}

const sbiBank= new Bank ("SBI Bank", "Wakad", "62514897564","SBIN0004598", 10.75);
sbiBank.showDetails();

const axisBank = new Bank ("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 12.5);
axisBank.showDetails();

function bankDetails(bankObject) {
    for (const key in bankObject) {
        if (Object.hasOwnProperty.call(bankObject, key)) {
            const element = bankObject[key];
            console.log(`${key}: ${element}`);  
        }
    }
}
bankDetails(sbiBank)
console.log("=============================");
bankDetails(axisBank);


class Person {
    constructor ( fullName, city){
        this.fullName = fullName
        this.city = city
    }
}
const personDhoni = new Person ("MS Dhoni", "Ranchi");
const personShubhamn = new Person ("Shubham Gill", "Mumbai");

console.log("========== Instance Of operator =========");

console.log(personDhoni instanceof Person);
console.log(personShubhamn instanceof Bank);
console.log(sbiBank instanceof Bank);