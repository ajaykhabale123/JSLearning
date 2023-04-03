function show(){//no argument with no return value

}
show();

function show(company, arg){//with argument and return value
    console.log(company, arg );
    return company+arg
}
let result = show("Codemind", 100 );
console.log(result);

//function expression
let display = function(arg1, arg2, arg3){
    return "success";
}
display ("codemind", 100, "Pune")

//operator-unary,binary, ternary
//Arithmetic==> +,-,/,%,*,++,--
//Assignment==>=,+=,-=,/=,*=
//Comparison==>  ==,===,
//logical operators==> &&, ||, !

let num1= "100";
let numFormat = +num1;
console.log(numFormat, typeof numFormat);


const num3= 100;
if(num3>=0 && num3%2==0 && typeof (num3) == "number"){
console.log(true);
}

let num  = '1000';
let explicit = +num;
console.log(num, typeof num);
console.log(explicit, typeof explicit);

let myNumber = 100 ;
console.log(typeof myNumber, myNumber); 
let conversion = myNumber.toString();
console.log(typeof conversion, conversion);


console.log("=============If Block");
console.log("Number is even or not");
let even = function (num) {
    if(num%2==0){
       return "Number is Even"
    }
    if(num%2!=0){
       return  "Number is odd"
    }
}
let resultEven = even(15);
console.log(resultEven);
 resultEven = even(10);
console.log(resultEven);

console.log("==============>> if else block");
let numev = function(num1){
    if (num1%2==0) {
        return "Even Number"
    } else {
        return "odd Number"
    }
}
resultEven=  numev(25);
console.log(resultEven);
resultEven=  numev(18);
console.log(resultEven);

console.log("==============>> if else if block");
function isPrime(num) {
    let isPrime = true;
    if (num===1) {
        return `The ${num} is not the prime nor composite`
    }
    if (num < 1 || isNaN(num)|| typeof num !="number") {
        return `Plz provide valid num`
    }else {
        for (let index = 2; index <num; index++) {
        if (num%index==0) {
            isPrime = false ;
        }
        if (isPrime) {
            return `The ${num} is prime`
        } else {
            return `The ${num} not prime`
        }
        
    }
}
}
let primeNum = isPrime(18)
console.log(primeNum);
 primeNum = isPrime(5)
console.log(primeNum);
primeNum = isPrime(1)
console.log(primeNum);
primeNum = isPrime(-3)
console.log(primeNum);
primeNum = isPrime(NaN)
console.log(primeNum);
primeNum = isPrime(undefined)
console.log(primeNum);
primeNum = isPrime("Ajay")
console.log(primeNum);


console.log("==============>> Switch case ");
function switchNum(day){
switch (day){
    case 1 :
        console.log("Monday");
        break
    case 5 :
        console.log("Friday");
        break
    default :
    console.log("Not the Number ");

}
}
switchNum(1);
switchNum(0);
switchNum(5);

console.log("=========== for loop");
for (let index = 0; index <=10; index++) {
    console.log(index);
    
}
console.log("====================> array");
let array = [1, 3, 4, 6, 5, 8, 34, 33, 98, 9];
let element = array[5];
console.log(element);
let indexof8 = array.indexOf(8);
console.log(indexof8);
let indexof98 = array.indexOf(89);
console.log(indexof98);
console.log(array.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
console.log("===== methods of array");
// add element at last
array.push(55)
console.log(array);
// add element at start
array.unshift(99);
console.log(array);
// remove element from last
array.pop();
console.log(array);
// remove element first
array.shift();
console.log(array);
// is available or not
let is34Available = array.includes(34);
console.log(is34Available);
// slice method
let numbersfrom4 = array.slice(4);
console.log(numbersfrom4);
let numbersfrom5to8 = array.slice(5,8);
console.log(numbersfrom5to8);
// splice method
let spliceElement = array.splice(2,4);
console.log("deleted",spliceElement);
array = [1, 3, 4, 6, 5, 8, 34, 33, 98, 9];
 array.splice(4,0,3,55)
console.log(array);
array = [1, 3, 4, 6, 5, 8, 34, 33, 98, 9];
console.log(array);
array.splice(3,3,55,56)
console.log(array);
//resize an array
console.log(`Array Length before resizing`, array.length,array);
array.length = 7;
console.log("Length after resizing",array.length,array);
// for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
console.log("for in loop");
for (const key in array) {
    if (Object.hasOwnProperty.call(array, key)) {
        const element = array[key];
        console.log(element);
    }
}
console.log("for of loop");
for (const key of array) {
    console.log(key)
}
console.log("while loop");
var index=0;
while (index<array.length) {
    console.log(array[index]);
    index++
}
console.log("sum of even using while loop");
 index = 0
let sumOfEven=0;  
while (index < array.length) {
    const arrayIndex = array[index] ;
    if (arrayIndex%2==0) {
        sumOfEven = sumOfEven + arrayIndex
    }
     
     index++
}
console.log(sumOfEven);

console.log("Object using literals");

const employee ={
    name : "Elon Musk",
    id : 2233,
    age : 38,
    adress : {
        street : "Gandhi Road",
        City : "PUNE"
    },
    friends : ["Hitesh", "Sachi,", "Ajay"],
    show : function(){
        console.log("Hi I'm Ajay");
    }
}
console.log(typeof employee);
console.log(employee.id); // access element
employee.adress = "Mumbai";// added new element
console.log(employee);
// delete employee.address;// deleted element
// console.log(employee);
employee.id = 5566; // updated the value of element
console.log(employee);
console.log(employee.adress.street);
console.log(employee.adress);
employee.show();
employee.techstack = function techstack(){
    console.log("My technology stack are");
}
employee.techstack()
console.table(employee);
employee.technolyStack= {
    tech1 : "HTML",
    tech2 : "CSS",
    tech3 : "JS"
}
console.table(employee)
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.table(Object.entries(employee));
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
}
console.log("in operator");
let isIdAvailable = "id" in employee;
console.log(isIdAvailable);

console.log("freeze object");
const player = {
    fullName: 'Virat Kohli',
    totalCenturies: 46,
    isMarried: true,
  }
 console.log( player.totalCenturies = 100);
 Object.freeze(player);

console.log("Merge two object");
 const student = {
    firstName : "Elon",
    lastName : "Musk",
    age : 54,
}

const adress = {
    country : "US",
    city : "Silicon Valley",
    PIN : "QA2345",
};

const mergedObject = Object.assign({},student,adress);
console.log(mergedObject);

const mergeObj = {}
Object.assign(mergeObj,student,adress);
console.log(mergeObj);

let clonedObject = Object.assign({},adress);
console.log(clonedObject);

console.log("======Clonning");
const person = {   
    fullName : "Ms Dhoni",
    age : 38
}
const newPerson = person;
console.log(person);
console.log(newPerson);
person.fullName = "Cool MSD"
console.log(newPerson);

const car = {
    brand : "TATA",
    color : "Black"
}
const vehicle = {... car};
console.log(car);
console.log(vehicle);
vehicle.color="Red";
console.log(car,vehicle);

const studentClon = {
    fullName : "Virat Kohli",
    age : 33,
    address : {
        street : "AS Club",
        city : "Pune",
        PIN : 413202,
    }
}
let newStudent = {... studentClon};
console.table(newStudent);
newStudent.address.street= "Gandhi Road";
console.table(newStudent);
console.table(studentClon);

const bank = {
    bankName : "SBI Bank",
    accountNo : 3456789,
    bankAddress :{
        city : "Banglore",
        PIN : 55566777,
        }
    }
let newBank = JSON.parse(JSON.stringify(bank));
newBank.bankAddress.PIN = 99999999;
console.log(bank.bankAddress.PIN);
console.log(newBank.bankAddress.PIN);

console.log("======== class");
class Person  {
    constructor (name, id, city){
        this.name = name;
        this.id = id;
        this.city = city
    }

}

array.forEach(element => {
    
});