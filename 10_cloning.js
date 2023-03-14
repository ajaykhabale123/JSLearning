// Deep Clone
n1 = 100
n2 = n1
console.log(n2);
n1 = 200
console.log(n2);

let s1 = 'Hey JS'  // Deep Clone
let s2 = s1
console.log(s2);

let  b1 = true  // Deep Clone
let b2 = b1 
console.log(b2);

const person = {   
    fullName : "Ms Dhoni",
    age : 38
}
let player = person;  // Shallow clone 
player.fullName = "Captain Cool Dhoni"
console.log(player);
console.log(person);

console.log(" Deep cloning by using Spread Operator");
const newPlayer = { ...person } // Deep cloning by using Spread Operator
newPlayer.city = "Ranchi"
console.log( "NewPlayer", newPlayer);
console.log("Person", person);

console.log('=======================');
const students = {
    adress : {
       details :{
           street : 'As Club',
           city : "PUNE",
       }
    }
}

console.log(students.adress.details.city);

const student = {
    fullName : "Virat Kohli",
    age : 33,
    address : {
        street : "AS Club",
        city : "Pune",
        PIN : 413202,
    }
}


const newStudent = { ...student } ;  // Deep cloning by using Spread Operator for nesred object ==> failed
newStudent.fullName= " King Kohli";
newStudent.address.city = "Mumbai";
console.log(`newStudent ==> ${newStudent.address.city}`);
console.log(`student ==> ${student.address.city}`);
console.log(`newStudent ==> ${newStudent.fullName}`);
console.log(`student ==> ${student.fullName}`);

console.log(" Deep cloning by using Spread string.json()");
const bank = {
bankName : "SBI Bank",
accountNo : 3456789,
bankAddress :{
    city : "Banglore",
    PIN : 55566777,
    }
}
const newBank =JSON.parse (JSON.stringify(bank));
newBank.bankAddress.PIN = 999999999;
console.log(`newBank ==> ${newBank.bankAddress.PIN}`);
console.log(`bank ==> ${bank.bankAddress.PIN}`);


