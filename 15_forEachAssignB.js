class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id
    this.emp_name = emp_name
    this.emp_dept = emp_dept
    this.emp_salary = emp_salary
    this.emp_company = emp_company
  }
}
const emp_anil = new Employee(22, 'Anil', 'IT', 50000, 'TCS')
const emp_radha = new Employee(33, 'Radha', 'HR', 74000, 'Wipro')
const emp_rishi = new Employee(55, 'Rishi', 'Finance', 47000, 'TCS')
const emp_sonali = new Employee(66, 'Sonali', 'Finance', 45000, 'Infy')
const emp_monika = new Employee(77, 'Monika', 'IT', 40000, 'Wipro')
const emp_viny = new Employee(88, 'Vinayak', 'IT', 75000, 'TCS')
const emp_mahi = new Employee(99, 'Mahesh', 'HR', 85000, 'Infy')

const array_employees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
]
console.warn(
  `----------------------------- 1] Find the TCS employees details ----------------------------- `,
)
array_employees.forEach((employee) => {
  if (employee.emp_company == 'TCS') {
    console.log(
      `Employee Name : ${employee.emp_name}, Company : ${employee.emp_company}`,
    )
  }
})
console.warn(
  `----------------------------- 2] Find the employees whose salary >=50000 ----------------------------- `,
)
array_employees.forEach((employee) => {
  if (employee.emp_salary >= 50000) {
    console.log(
      `Employee Details ==> Employee ID : ${employee.emp_id}, Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`,
    )
  }
})
console.warn(
  `----------------------------- 3] Find the sum of all employees salary ----------------------------- `,
)
let totalSalary = 0
array_employees.forEach((employee) => {
  totalSalary = totalSalary + employee.emp_salary
})
console.log(`The total salary of all employees is : ${totalSalary}`)
console.warn(
  `----------------------------- 4] Find the average salary of all employees ----------------------------- `,
)

let averageSalary = totalSalary / array_employees.length
console.log(`The average Salary of all employees is : ${averageSalary}`)
console.warn(
  `------------------- 5] Find the IT or HR department employes whose salary is >= 75000 ------------------- `,
)
array_employees.forEach((employee) => {
  if ((employee.emp_dept == 'IT' || 'HR') && employee.emp_salary >= 75000) {
    console.log(
      `Employee Details ==> Employee ID : ${employee.emp_id}, Employee Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`,
    )
  }
})
