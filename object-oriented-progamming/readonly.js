var school = /** @class */ (function () {
    function school() {
        this.first_name = []; //Now you can't access this property out the class so you need to add the name from addstudent() method only
    }
    school.prototype.addstudent = function (id, first_name) {
        this.first_name.push(first_name);
    };
    school.prototype.printdetails = function () {
        console.log("I our class there are " + this.first_name.length);
        console.log("Students name are " + this.first_name, "And it's id is " + this.id);
    };
    return school;
}());
var student1 = new school();
student1.addstudent(1, 'Hrushikesh');
student1.addstudent(2, 'Hrushi');
//student1.first_name.push('anna')
console.log(student1.printdetails());
