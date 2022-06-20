type combinable = number | string;

function add (a : combinable , b : combinable){
    if(typeof a === 'string' || typeof b === 'string' ){
        return a.toString() + b.toString();
    }
    return a+b;
}

console.log(add(2,3))
console.log(add(2,'3'))

type admin = {
    name : string;
    privilages : string[];
}

type emp = {
    name :string;
    startDate : Date;
}

type adminemp = admin & emp;

const e1 : adminemp = {
    name:'Hrushi',
    privilages:['server'],
    startDate: new Date()

}

function information (emp : adminemp){
    if('privilages' in emp){
        console.log('privilages ' + emp.privilages);
    }
    if('name' in emp){
        console.log('name ' + emp.name);
    }
    
}
console.log(information(e1))

class car {
    drive(){
        console.log('driving')
    }
}

class truck {
    drive(){
        console.log('driving truck');
    }
    loadCargo(cargo:number){
        console.log('load cargo of '+ cargo)
    }

}

type vehicle = truck | car;

const v1 = new car();
 
function useVehicle(vehicle:vehicle){
    vehicle.drive()
    if(vehicle instanceof truck){
        vehicle.loadCargo(1000);
    }
}


console.log(useVehicle(v1));