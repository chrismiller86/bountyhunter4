

const employees = []


function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name + "," + " Job Title: " + this.jobTitle + "," + " Salary: " + this.salary + "," + " Status: " + this.status);
    }

}



const employee1 = new Employee("Rick", "Captain", "$100,000/yr")
const employee2 = new Employee("Steve", "Engineer", "$80,000/yr")
const employee3 = new Employee("Sharon", "Paramedic", "$60,000/yr")
const volunteer = new Employee("David", "Stretcher-fetcher", "$0")
volunteer.status = "Volunteer"
employee1.printEmployeeForm()
employee2.printEmployeeForm()
employee3.printEmployeeForm()
volunteer.printEmployeeForm()
employees.push(employee1, employee2, employee3, volunteer)

