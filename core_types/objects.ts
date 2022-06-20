const person : {
    name : string;
    age : number;
} = {
    name : 'Hrushikesh',
    age : 22
}
//In here you can specifically told that this variable should be of this type only
const person2 = {
    name : 'Hrushi1',
    age : 18
}
//In here the typescript with type inference it will know that what type of variable it is

console.log(person.name)