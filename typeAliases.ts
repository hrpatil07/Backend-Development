//With typealiases you can create you own type with all the complexity like 2 , 3 union types types
type combine = number | string;
function add (input1:combine , input2:combine){
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return input1+input2;
    }else{
        return input1.toString() + input2.toString();
    }
}

console.log(add('hello','world'))
console.log(add(2,4))
