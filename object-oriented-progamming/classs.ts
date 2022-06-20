class Department {
    name:string;
    employees:string[] = [];

    constructor(n:string){
        this.name = n;
        

    }
    describe(this : Department){
        console.log('Department'+ this.name)
    }
    addemp(employee:string){
        this.employees.push(employee )
    }
    printempinfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
} 

const It_Department = new Department(' It Department');

console.log(It_Department);

It_Department.describe();
It_Department.addemp('Hrushi');
It_Department.addemp('Hrushikesh');
console.log(It_Department.printempinfo())


//const It_dept = {describe : It_Department.describe};

//It_dept.describe()

