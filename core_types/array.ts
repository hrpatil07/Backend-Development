let hobbies : string[]
hobbies = ['playing chess', 'reading about histroy' , 'vollyball']

for (const hobby of hobbies){
    console.log(hobby);
    //In this case the typescript knows that the array is of string type so it can show the functionalities or the method that are provided for string
}

let digit : number[];
digit = [1,2,3,4,5,6];
//This is how you can put the type for the array and if add the value this is of not that type it will show an error

