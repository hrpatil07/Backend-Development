class Employee {
    static headcount : number = 0 ;
    constructor(private firstName : string ,
            private lastName : string ,
            private jobTitle : string
        ){
            Employee.headcount++;
        }
}
let Hrushikesh = new Employee('Hrushikesh','Patil','Backend Developer')
let HR = new Employee('HR','Patil','Nest.JS Developer')

console.log(Employee.headcount)