const employee = {
  id: 1234567,
  name: 'Elon Musk',
  country: 'US',
  city: 'Silicon Valley',
}
console.log('How to traverse Object')
for (const key in employee) {
  if (Object.hasOwnProperty.call(employee, key)) {
    const element = employee[key]
    console.log(key, element)
  }
}
const keysOfEmployee = Object.keys(employee)
console.log(keysOfEmployee)

const valuesOfEmployee = Object.values(employee)
console.log(valuesOfEmployee)

const entriesOfEmployee = Object.entries(employee)
console.log(entriesOfEmployee)

console.log('========in operator ========')
const isIdAvailable = 'id' in employee
console.log(` Is Id available : `, isIdAvailable)

const player = {
  fullName: 'Virat Kohli',
  totalCenturies: 46,
  isMarried: true,
}
player.totalWicket = 120
delete player.totalCenturies;
console.table(player)

console.log("===========Object.freez============");//We can not modify or delete the any proerty.
Object.freeze(player);
player.totalWicket = 100;// Not allowed add new propery 
delete player.totalCenturies;// Not allowed delete
player.fullName = "King Kohli"; // Not aloowed modification 
console.table(player);

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
 console.log(" ============== How to merge two object ================");
 console.log("======= Object.assign Method ========");
 
 // First Way
const mergedObject = Object.assign({}, student, adress);
console.table(mergedObject);

 //second way
 const newObject = {};
 Object.assign(newObject, student , adress);
 console.table(newObject);

 //Third way
 Object.assign( student , adress);
 console.table(student);

 // Fourth way
 Object.assign( adress , student);
 console.table(adress);

Object.freeze(adress);

