var hobbies;
hobbies = ['playing chess', 'reading about histroy', 'vollyball'];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
    //In this case the typescript knows that the array is of string type so it can show the functionalities or the method that are provided for string
}
var digit;
digit = [1, 2, 3, 4, 5, 6];
//This is how you can put the type for the array and if add the value this is of not that type it will show an error
