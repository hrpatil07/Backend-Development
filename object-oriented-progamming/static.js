var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    Employee.headcount = 0;
    return Employee;
}());
var Hrushikesh = new Employee('Hrushikesh', 'Patil', 'Backend Developer');
var HR = new Employee('HR', 'Patil', 'Nest.JS Developer');
console.log(Employee.headcount);
