console.log('============= Step 1 =============')
console.log('============= Vehicle =============')
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
  console.log(vehicles)
}

console.log('============= Step 2 & 3 =============')
console.log('============= College =============')
class College {
  constructor(
    collegeName,
    location,
    collegeGrade,
    facilityOfHostel,
    principal,
    studentCapacity,
  ) {
    this.collegeName = collegeName
    this.location = location
    this.collegeGrade = collegeGrade
    this.facilityOfHostel = facilityOfHostel
    this.principal = principal
    this.studentCapacity = studentCapacity
  }
}
const coep = new College(
  'COEP',
  'Pune',
  'A+',
  true,
  'Dr. Bharatkumar Ahuja',
  '1200',
)
const pict = new College('PICT', 'Pune', 'A+', true, 'R.Sreemathy', '2500')
const sinhgad = new College(
  'SCOE',
  'Pune',
  'A+',
  true,
  'Dr. S.D.Lokhande',
  '4000',
)
const vjti = new College(
  'vJTI',
  'Mumbai',
  'A+',
  false,
  'Sunil G. Bhirud',
  '5000',
)

function traverseObject(property) {
  collegeArray = []
  for (const key in property) {
    if (Object.hasOwnProperty.call(property, key)) {
      const element = property[key]
      collegeArray.push(`${key}: ${element}`)
    }
  }
  console.log(collegeArray)
}
traverseObject(coep)
traverseObject(pict)
traverseObject(sinhgad)
traverseObject(vjti)

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
