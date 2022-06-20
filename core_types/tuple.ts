let tuple1 : [number , string];
tuple1 = [1,'Hrushikesh']
console.log(tuple1[0])

//The exception in this is that you can push the value in it and it will not show any error
tuple1.push('helloworld');
console.log(tuple1)

let tuple2 : [number , number ] = [1,3];
//This is show the error cause onlu 2 numbers should be there are here more than that are.
