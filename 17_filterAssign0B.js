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
  console.log("Condition 1] ==> Find the Employees From TCS");
  const tcsEmployees = employees.filter(employee =>{
    if (employee.emp_company=="TCS") {
        console.log( `Company Name : ${employee.emp_company}, Employee Name : ${employee.emp_name}`);
    }
  });
  console.log("=====================================================");
  console.log("Condition 2] ==> Find the average salary from company Wipro");
const wiproEmployees = employees.filter(employe => employe.emp_company=="Wipro")
const average = wiproEmployees.reduce((currentvalue, value)=>{
  return currentvalue.emp_salary + value.emp_salary
});
console.log("The average salary of Wipro employees is :",average/wiproEmployees.length);
console.log("=====================================================");
console.log("Condition 3] ==> Find the average salary from company Wipro and Infy");
const wiproInfyCompany = employees.filter(employe => employe.emp_company=="Wipro" || employe.emp_company=="Infy");
const avgSalary = wiproInfyCompany.reduce((runningTotal,value)=>{
  return runningTotal+ value.emp_salary
},0)
console.log(avgSalary/wiproInfyCompany.length);

