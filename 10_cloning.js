const person = {
    fullName : "Ms Dhoni",
    age : 38
}

Object.freeze(person);
person.city = "Ranchi";

let player = person;

console.log(player);

n1 = 100
n2 = n1
console.log(n2);
n1 = 200
console.log(n2);

let s1 = 'Hey JS'
let s2 = s1
console.log(s2);

let  b1 = true
let b2 = b1 
console.log(b2);
