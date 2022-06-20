type admin = {
    name:string;
    privilages:string[];
}

type employee = {
    name:string;
    startDate :Date;
}

type ElevatedEmployee = admin & employee ;

const e1 : ElevatedEmployee = {
    name:'max',
    privilages :['create-server'],
    startDate : new Date()
}

//We could have get exact same result with intersection inheritance 
//for ex:

interface Admin {
    name:string;
    privilages :string[];
}
interface Employee {
    name :string;
    startDate : Date;
}

interface AdminandEmployee extends Admin , Employee {};

const e2 : AdminandEmployee =  {
    name : 'Hrushi',
    privilages : ['learn-typescript'],
    startDate : new Date()

}

console.log(e1);
console.log(e2);

type numastring = number | string ;
type numbool = number | boolean;
type universal = numastring & numbool;

const e3 : universal = 2;
console.log("e3 value is " + e3);