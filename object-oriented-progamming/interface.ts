interface Employee {
    name:string;
    id:number;

    greet(phrase:string):void;
}

let Hrushi:Employee;

Hrushi = {
    name:'Hrushi',
    id:19990,
    greet(phrase:string){
        console.log(phrase+' ' + this.name) 
    }
};

Hrushi.greet('Welcome to the compnay MR.' + Hrushi.name+ 'Your employee id is ' + Hrushi.id)

