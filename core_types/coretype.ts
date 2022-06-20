function add(n1:number , n2:number){
    return n1+n2;
}
const n1 = 5;
//Type interference finds out that the varible is number and its also a constant number

const n2 = 6;

let result = add(n1,n2);
console.log(result);

