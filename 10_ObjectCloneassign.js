const arrayNums = [20, 3, 4, 56, 90, 400, 49]
const clonedArrayNums = arrayNums
console.log('=========== Step 1 Shallow Clone  ===========')
clonedArrayNums.push(55, 66)
console.log(`Original Array ==> ${arrayNums}`)
console.log(`Cloned Array ==> ${clonedArrayNums}`)
console.log('=========== Step 2 Deep Clone using Spread Operator  ===========')
const deepCloneArrayNums = [...arrayNums]
arrayNums.push(10, 25)
console.log(`Original Array ==> ${arrayNums}`)
console.log(`Cloned Array ==> ${deepCloneArrayNums}`)
console.log(
  '=========== Step 3 Merged array with arrayNums using spread operator ===========',
)
const arrayEven = [2, 30, 14, 8]
const result = [...arrayNums, ...arrayEven]
console.log(`After Concat ==> ${result}`)

const employee_info = {
  emp_id: 27,
  emp_name: 'John Doe',
  salary: {
    july_month: '40,0000INR',
    aug_month: '50,0000INR',
    jun_month: '65,0000INR',
  },
  address: {
    locality: {
      colony: 'Om Vrindavan Society',
      street: 'Kanch Pokli, 431202',
    },
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
  },
  mobiles: ['+91 8600 3456 88', '1800-4567 32', '+91-9096 5678 77'],
}
console.log('=========== Step 5 log the employee details ===========')
console.log(
  `a] Address==> Colony : ${employee_info.address.locality.colony},  Street : ${employee_info.address.locality.street}, City : ${employee_info.address.city}, State : ${employee_info.address.state}, Country : ${employee_info.address.country} `,
)
console.log(`b] Mobile Numbers : ${employee_info.mobiles}`)
console.log('=========== Step 6 Deep Cloning Using JSON.stringfy() ===========')
const newEmploye = JSON.parse(JSON.stringify(employee_info))
newEmploye.salary.july_month = '80,000INR'
console.log(`a] Original Object Salary ==> ${employee_info.salary.july_month}`)
console.log(`   Cloned Object Salary ==> ${newEmploye.salary.july_month} `)
employee_info.address.country = 'United Kingdom'
console.log('----------------------------------------------------')
console.log(`b] Original Object Country ==> ${employee_info.address.country}`)
console.log(`   Cloned Object Country ==> ${newEmploye.address.country}`)
