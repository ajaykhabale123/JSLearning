function Person(fullName, city){
this.fullName= fullName;
this.city = city ;
this.show = function (){
    console.log(`${this.fullName} ${this.city}`);
}
}
Person.prototype.country = "India";
// Prototype is a BluePrint of object. which can allows to access the properties and methods those are not available in object
const dhoni = new Person("MS Dhoni", "Ranchi");
 dhoni.show();
console.log(dhoni.country);

 const gill = new Person("Shubham Gill", "Mumbai");
 gill.show();
 console.log(gill.country);

 const ash = new Person("R Ashwin", "Chennai");
 ash.show();
 console.log(ash.country);

 console.log("======= Built in Object ========");
 const date = new Date ();
 console.log(date);
 console.log(typeof date);

 const result = Math.pow(2,3);
 console.log(result);