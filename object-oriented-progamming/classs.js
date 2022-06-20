var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department' + this.name);
    };
    Department.prototype.addemp = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printempinfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var It_Department = new Department(' It Department');
console.log(It_Department);
It_Department.describe();
It_Department.addemp('Hrushi');
It_Department.addemp('Hrushikesh');
console.log(It_Department.printempinfo());
//const It_dept = {describe : It_Department.describe};
//It_dept.describe()
