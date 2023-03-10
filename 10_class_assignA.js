console.log('============= Step 1 : Vehicle =============')
class Vehicle {
  constructor(company, model, type, mileage, seatingCapacity) {
    this.company = company
    this.model = model
    this.type = type
    this.mileage = mileage
    this.seatingCapacity = seatingCapacity
  }
}
const nexon = new Vehicle('TATA', 'Nexon', 'Petrol', '18 kmpl', '5')
const swift = new Vehicle(
  'Maruti Suzuki',
  'Swift LXI',
  'Diesel',
  '22 kmpl',
  '5',
)
const grandi10 = new Vehicle('Hyundai', 'Grand i10 Nios', 'CNG', '28 kmpl', '5')
const kia = new Vehicle('KIA', 'KIA Sonet', 'Petrol', '20 kmpl', '5')
const mahindra = new Vehicle('Mahindra', 'XUV 300', 'Diesel', '17 kmpl', '5')

const arrayOfVehicles = [nexon, swift, grandi10, kia, mahindra]
for (const vehicles of arrayOfVehicles) {
  console.log(vehicles);
}
console.log("================================================================================");
for (let index = 0; index < arrayOfVehicles.length; index++) {
  const element = arrayOfVehicles[index];
  console.log(`Vehicle Details : Company : ${element.company}, Model : ${element.model}, Type : ${element.type}, Average : ${element.mileage}, Seats : ${element.seatingCapacity}`);
}

console.log('============= Step 2 & 3 : College =============')

class College {
  constructor(
    collegeName,
    location,
    collegeGrade,
    facilityOfHostel,
    
  ) {
    this.collegeName = collegeName
    this.location = location
    this.collegeGrade = collegeGrade
    this.facilityOfHostel = facilityOfHostel
    
  }
}
const coep = new College(
  'COEP',
  'Pune',
  'A+',
  true,
  
)
const pict = new College('PICT', 'Pune', 'A+', true, )
const sinhgad = new College(
  'SCOE',
  'Pune',
  'A+',
  true,
  
)
const vjti = new College(
  'VJTI',
  'Mumbai',
  'A+',
  false,
 
)


function traverseObject(property) {
  for (const key in property) {
    if (Object.hasOwnProperty.call(property, key)) {
      const element = property[key]
      console.log(`${key}: ${element}`)
    }
  }
  
}
traverseObject(coep);
console.log("================================================================================");
traverseObject(pict);
console.log("================================================================================");
traverseObject(sinhgad);
console.log("================================================================================");
traverseObject(vjti);
console.log("================================================================================");

console.log('============= Step 4 =============')
function primeOrNot(num) {
  if (num === 1) {
    console.log(`The ${num} is not a Prime number neither a Composite Number`)
  } else if (num < 1) {
    console.log(`The ${num} is not Prime Number`)
  } else {
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        return `The ${num} is not a Prime Number`
      }
    }
    return `The ${num} is a Prime Number`
  }
}
var result = primeOrNot(11)
console.log(result)
var result = primeOrNot(15)
console.log(result)
var result = primeOrNot(20)
console.log(result)
var result = primeOrNot(2)
console.log(result)
