var employees = [];

function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status || "Full Time";
}

Employee.prototype.printEmployeeForm = function () {
    console.log("Name: " + this.name +
        "\nJob Title: " + this.title +
        "\nSalary: " + this.salary +
        "\nStatus: " + this.status);
}
// // Instantiate three employees
let karenFromFinance = new Employee("Karen", "From Finance", "30K Australian Dollars");
let mirandaPriestly = new Employee("Miranda Preistly", "Editor In Cheif", "More than you");
let bob = new Employee("Bob", "Wise Janitor", "?????", "Contract");

// // Override the status attribute of one of them to either "Part Time" or "Contract
bob.status = "Part Time";

// // Call the printEmployeeForm method for each employee
karenFromFinance.printEmployeeForm();
mirandaPriestly.printEmployeeForm();
bob.printEmployeeForm();


// // Put the generated employees into the employees array using whichever method you prefer
employees.push(karenFromFinance, mirandaPriestly, bob);
console.log(employees);

// // You are to create a collection of employee's information for your company. Each employee has the following attributes:

// // Name
// // Job title
// // Salary
// // Status
// // First, you will create an array named employees

// // Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation 
// and the fourth will be defaulted to "Full Time".

// // This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

// //     (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")




