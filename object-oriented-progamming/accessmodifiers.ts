class school {
    private first_name:string[] = [];//Now you can't access this property out the class so you need to add the name from addstudent() method only

    addstudent(first_name:string){
        this.first_name.push(first_name);
    }
    printdetails(){
        console.log("I our class there are " + this.first_name.length)
        console.log("Students name are " + this.first_name)

    }
}

const student1 = new school();
student1.addstudent('Hrushikesh');
student1.addstudent('Hrushi')
//student1.first_name.push('anna')

console.log(student1.printdetails())