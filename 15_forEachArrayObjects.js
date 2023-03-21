class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
console.error("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Created All Employee Objects Using Class ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
const empAnil = new Employee (22,"Anil","IT",50000,"TCS");
const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee (77,"Monika","IT",40000,"wipro");
const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");
const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

arrayEmployees = [empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
console.log("Find the employees whose name starts with 'R' ");
arrayEmployees.forEach(employee => {
    if (employee.empName.startsWith("R")) {
        console.log(employee);
    }
});

console.log("Infy employees total salary");
let totalSalaryOfInfy = 0;
arrayEmployees.forEach(employee => {
    if (employee.empCompany=="Infy") {
        totalSalaryOfInfy= employee.empSalary + totalSalaryOfInfy;
    
    }
});
console.log(totalSalaryOfInfy);