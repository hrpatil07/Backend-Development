function add (input1 : number | string , input2 : number | string){
    let result ;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString()
    }
    return result;
}

let total_age = add(11,11)
console.log(total_age);

let full_name = add('hrushi','patil');
console.log(full_name)