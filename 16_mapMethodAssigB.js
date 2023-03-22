console.warn('============== Map Method Assignment B ==============')
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

const employees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
]
console.warn('-------- Condition => 1] List of all employees names --------')
const names = employees.map((employees) => employees.emp_name)
console.log(names)
console.warn('-------- Condition => 2] List of all Departments --------')
const departments = employees.map((employees) => employees.emp_dept)
console.log(departments)
console.warn('-------- Condition => 3] List of all employees ID --------')
const employeeId = employees.map((employees) => employees.emp_id)
console.log(employeeId)
console.warn(
  '-------- Condition => 4] List of all employees names working in TCS --------',
)
const employessName = employees.map((employees) => {
  if (employees.emp_company == 'TCS') {
    console.log(
      `Employee Name : ${employees.emp_name}, Company : ${employees.emp_company}`,
    )
  }
})
