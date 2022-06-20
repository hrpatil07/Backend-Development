function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(2, 3));
console.log(add(2, '3'));
var e1 = {
    name: 'Hrushi',
    privilages: ['server'],
    startDate: new Date()
};
function information(emp) {
    if ('privilages' in emp) {
        console.log('privilages ' + emp.privilages);
    }
    if ('name' in emp) {
        console.log('name ' + emp.name);
    }
}
console.log(information(e1));
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function () {
        console.log('driving');
    };
    return car;
}());
var truck = /** @class */ (function () {
    function truck() {
    }
    truck.prototype.drive = function () {
        console.log('driving truck');
    };
    truck.prototype.loadCargo = function (cargo) {
        console.log('load cargo of ' + cargo);
    };
    return truck;
}());
var v1 = new car();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof truck) {
        vehicle.loadCargo(1000);
    }
}
console.log(useVehicle(v1));
