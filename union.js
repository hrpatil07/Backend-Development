function add(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var total_age = add(11, 11);
console.log(total_age);
var full_name = add('hrushi', 'patil');
console.log(full_name);
