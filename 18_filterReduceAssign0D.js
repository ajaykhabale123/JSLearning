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
  
  const arrayEmps = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  console.log("Condition 1] ==> Find the Employees From Wipro");
  const wiproEmployees = arrayEmps.filter(employee =>{
    if (employee.emp_company=="Wipro") {
        console.log( `Company Name : ${employee.emp_company}, Employee Name : ${employee.emp_name}`);
    }
  });
  console.log("=====================================================");
  console.log("Condition 2] ==> Find the Employees From IT or HR department");
  const employeITHR = arrayEmps.filter(employe => {
    if (employe.emp_dept=="IT" || employe.emp_dept=="HR") {
      console.log( `Department : ${employe.emp_dept}, Employee Name : ${employe.emp_name}`);
    }
  })
  console.log("=====================================================");
  console.log("Condition 3] ==> Find the Employees whose emp id is grater then 50 ");
  const greater50 = arrayEmps.filter(employe =>{
      if (employe.emp_id > 50) {
        console.log(`Employe ID : ${employe.emp_id}, Employee Name : ${employe.emp_name}`); 
      }
  } )
  console.log("=====================================================");
  console.log("Condition 4] ==> Find the Employees whose names starts with letter 'A' or 'v' or 'M' "); 
  const startsWith = arrayEmps.filter(employe =>{
    if (employe.emp_name.startsWith("A") || employe.emp_name.startsWith("V") || employe.emp_name.startsWith("M")) {
      console.log(`Employee Name : ${employe.emp_name}`);
    }
  })
  console.log("=====================================================");
  console.log("Condition 5] ==> Find the average salary for all the employees"); 
const sum = arrayEmps.filter(employe => employe.emp_salary)
const avg = sum.reduce((runningTotal,value)=>{
  return runningTotal + value.emp_salary
},0);
console.log("The Average salary is :", avg/sum.length);
console.log("=====================================================");
console.log("Condition 6] ==> Find the average salary for IT department"); 
const empIT = arrayEmps.filter(employe => employe.emp_dept == "IT")
const avgSalary = empIT.reduce((runningTotal, value)=>{
  return runningTotal + value.emp_salary
},0)
console.log("The Average Salary for IT deparment is :",avgSalary/empIT.length);
