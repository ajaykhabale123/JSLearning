const employee = {
    id : 1234567,
    name : "Elon Musk",
    country : "US",
    city : "Silicon Valley",

}
console.log("How to traverse Object");
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
         
    }
}
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);

console.log("========in operator ========");
const isIdAvailable = "id" in employee;
console.log(` Is Id available : `, isIdAvailable);